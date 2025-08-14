/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';
import HomePage from './pages/HomePage';
import SpontaneityPage from './pages/SpontaneityPage';
import ResourcesPage from './pages/ResourcesPage';
import RoutinesPage from './pages/RoutinesPage';
import SettingsPage from './pages/SettingsPage';
import App from './App';
import './styles/index.css';

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(console.error);
}

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={HomePage} />
      <Route path="/spontaneity" component={SpontaneityPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/routines" component={RoutinesPage} />
      <Route path="/settings" component={SettingsPage} />
    </Router>
  ),
  root
);