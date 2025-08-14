import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

// The asset manifest is injected by wrangler
// @ts-ignore
import manifestJSON from '__STATIC_CONTENT_MANIFEST';
const assetManifest = JSON.parse(manifestJSON);

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle API routes
    if (url.pathname.startsWith('/api/')) {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      };
      
      if (url.pathname === '/api/health') {
        return new Response(JSON.stringify({ 
          status: 'ok',
          message: 'LivingCycle API - Built with Claude',
          environment: 'staging'
        }), { headers });
      }
      
      return new Response(JSON.stringify({ error: 'Not found' }), { 
        status: 404, 
        headers 
      });
    }
    
    // For Workers Sites, we need to handle the static content
    try {
      // This is the key - we need to pass the manifest correctly
      const asset = await getAssetFromKV(
        {
          request,
          waitUntil(promise) {
            return ctx.waitUntil(promise);
          },
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: assetManifest,
        }
      );
      
      return asset;
    } catch (e) {
      // Try to serve index.html for SPA routes
      const pathname = url.pathname;
      if (!pathname.includes('.')) {
        try {
          const indexRequest = new Request(url.origin + '/index.html', request);
          return await getAssetFromKV(
            {
              request: indexRequest,
              waitUntil(promise) {
                return ctx.waitUntil(promise);
              },
            },
            {
              ASSET_NAMESPACE: env.__STATIC_CONTENT,
              ASSET_MANIFEST: assetManifest,
            }
          );
        } catch {
          // Return error details for debugging
          return new Response(`Failed to load page: ${pathname}`, { status: 404 });
        }
      }
      
      return new Response('Not found', { status: 404 });
    }
  },
};