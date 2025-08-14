export function checkOfflineStatus() {
  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    navigator.serviceWorker.ready.then((registration) => {
      return (registration as any).sync.register('data-sync');
    }).catch((err) => {
      console.log('Background sync registration failed:', err);
    });
  }
}

export function isOfflineCapable(): boolean {
  return 'serviceWorker' in navigator && 'caches' in window;
}

export async function cacheResources(urls: string[]) {
  if (!isOfflineCapable()) return;
  
  try {
    const cache = await caches.open('v1-resources');
    await cache.addAll(urls);
  } catch (err) {
    console.error('Failed to cache resources:', err);
  }
}

export async function getCachedResource(url: string): Promise<Response | null> {
  if (!isOfflineCapable()) return null;
  
  try {
    const cache = await caches.open('v1-resources');
    const response = await cache.match(url);
    return response || null;
  } catch (err) {
    console.error('Failed to get cached resource:', err);
    return null;
  }
}