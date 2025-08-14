import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // API routes
    if (url.pathname.startsWith('/api/')) {
      return handleAPI(request, env);
    }
    
    try {
      // Add trailing slash to root
      if (url.pathname === '/') {
        url.pathname = '/index.html';
        request = new Request(url.toString(), request);
      }
      
      // Try to serve the asset
      const response = await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: JSON.parse(__STATIC_CONTENT_MANIFEST),
        }
      );
      
      // Add headers for better caching
      const headers = new Headers(response.headers);
      headers.set('Cache-Control', 'public, max-age=3600');
      
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers
      });
    } catch (e) {
      // For SPA routes, always return index.html
      try {
        const indexUrl = new URL(request.url);
        indexUrl.pathname = '/index.html';
        const indexRequest = new Request(indexUrl.toString(), {
          headers: request.headers,
        });
        
        const response = await getAssetFromKV(
          {
            request: indexRequest,
            waitUntil: ctx.waitUntil.bind(ctx),
          },
          {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: JSON.parse(__STATIC_CONTENT_MANIFEST),
          }
        );
        
        return new Response(response.body, {
          status: 200,
          headers: response.headers
        });
      } catch (err) {
        // Return a proper 404 for truly missing resources
        return new Response(`Not found: ${url.pathname}`, { status: 404 });
      }
    }
  },
};

async function handleAPI(request, env) {
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
    case '/api/health':
      return new Response(JSON.stringify({ 
        status: 'ok',
        message: 'LivingCycle API - Built with Claude',
        environment: 'staging'
      }), { headers });
      
    default:
      return new Response(JSON.stringify({ error: 'Not found' }), { 
        status: 404, 
        headers 
      });
  }
}