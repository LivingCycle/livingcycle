import { Component, createSignal, onMount, JSX } from 'solid-js';
import Navigation from './components/Navigation';
import { checkOfflineStatus } from './utils/offline';

interface AppProps {
  children?: JSX.Element;
}

const App: Component<AppProps> = (props) => {
  const [isOffline, setIsOffline] = createSignal(false);

  onMount(() => {
    // Monitor online/offline status
    setIsOffline(!navigator.onLine);
    
    window.addEventListener('online', () => setIsOffline(false));
    window.addEventListener('offline', () => setIsOffline(true));
    
    // Check for updates
    checkOfflineStatus();
  });

  return (
    <div class="app">
      {isOffline() && (
        <div class="offline-banner">
          Working offline - Changes will sync when connected
        </div>
      )}
      
      <Navigation />
      
      <main class="main-content">
        {props.children}
      </main>
      
      <footer class="app-footer">
        <p>
          <a href="https://github.com/LivingCycle/livingcycle" target="_blank" rel="noopener">
            Open Source
          </a>
          {' • '}
          Built with <a href="https://claude.ai" target="_blank" rel="noopener">Claude</a>
          {' • '}
          <a href="https://github.com/LivingCycle/livingcycle/blob/main/LICENSE" target="_blank" rel="noopener">
            AGPL-3.0
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;