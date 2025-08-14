export interface Env {
  SCRIPTS_KV: KVNamespace;
  HELPLINES_KV: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    // CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    };
    
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }
    
    // Route handling
    if (url.pathname === '/api/scripts') {
      const scripts = await env.SCRIPTS_KV.get('scripts', 'json');
      return new Response(JSON.stringify(scripts || {}), { headers });
    }
    
    if (url.pathname === '/api/helplines') {
      const helplines = await env.HELPLINES_KV.get('helplines', 'json');
      return new Response(JSON.stringify(helplines || []), { headers });
    }
    
    if (url.pathname === '/api/health') {
      return new Response(JSON.stringify({ status: 'ok' }), { headers });
    }
    
    return new Response('Not Found', { status: 404 });
  },
};