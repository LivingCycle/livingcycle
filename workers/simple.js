import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    try {
      // Handle API routes
      const url = new URL(request.url);
      if (url.pathname.startsWith('/api/')) {
        return new Response(JSON.stringify({ 
          status: 'ok',
          message: 'LivingCycle API - Built with Claude',
          environment: 'staging',
          path: url.pathname
        }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Try to serve static assets
      return await getAssetFromKV(
        {
          request,
          waitUntil(promise) {
            return ctx.waitUntil(promise);
          },
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: JSON.parse(__STATIC_CONTENT_MANIFEST),
          mapRequestToAsset: (request) => {
            // If it's a route without extension, serve index.html
            const url = new URL(request.url);
            if (!url.pathname.includes('.') || url.pathname === '/') {
              return new Request(`${url.origin}/index.html`, request);
            }
            return request;
          },
        }
      );
    } catch (e) {
      // For any error, try to serve index.html for SPA routing
      try {
        const url = new URL(request.url);
        const indexRequest = new Request(`${url.origin}/index.html`, request);
        return await getAssetFromKV(
          {
            request: indexRequest,
            waitUntil(promise) {
              return ctx.waitUntil(promise);
            },
          },
          {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: JSON.parse(__STATIC_CONTENT_MANIFEST),
          }
        );
      } catch (error) {
        return new Response(`Error: ${error.message}`, { status: 500 });
      }
    }
  },
};