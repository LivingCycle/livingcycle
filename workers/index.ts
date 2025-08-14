import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

declare global {
  const __STATIC_CONTENT_MANIFEST: string;
}

const assetManifest = JSON.parse(__STATIC_CONTENT_MANIFEST);

export interface Env {
  __STATIC_CONTENT: KVNamespace;
  SCRIPTS_KV: KVNamespace;
  HELPLINES_KV: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    // API routes
    if (url.pathname.startsWith('/api/')) {
      return handleAPI(request, env);
    }
    
    // Serve static assets
    try {
      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: assetManifest,
        }
      );
    } catch (e) {
      // For SPA, return index.html for all non-asset routes
      if (e instanceof Error && e.message.includes('could not find')) {
        try {
          const indexRequest = new Request(new URL('/', request.url).toString(), request);
          return await getAssetFromKV(
            {
              request: indexRequest,
              waitUntil: ctx.waitUntil.bind(ctx),
            },
            {
              ASSET_NAMESPACE: env.__STATIC_CONTENT,
              ASSET_MANIFEST: assetManifest,
            }
          );
        } catch {
          return new Response('Not found', { status: 404 });
        }
      }
      return new Response('Error', { status: 500 });
    }
  },
};

async function handleAPI(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers });
  }
  
  switch (url.pathname) {
    case '/api/scripts':
      const scripts = await env.SCRIPTS_KV?.get('scripts', 'json') || {};
      return new Response(JSON.stringify(scripts), { headers });
      
    case '/api/helplines':
      const helplines = await env.HELPLINES_KV?.get('helplines', 'json') || [];
      return new Response(JSON.stringify(helplines), { headers });
      
    case '/api/health':
      return new Response(JSON.stringify({ 
        status: 'ok',
        message: 'LivingCycle API - Built with Claude'
      }), { headers });
      
    default:
      return new Response(JSON.stringify({ error: 'Not found' }), { 
        status: 404, 
        headers 
      });
  }
}