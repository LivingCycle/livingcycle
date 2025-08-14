import { Component } from 'solid-js';
import QuickActions from '../components/QuickActions';
import DailyChecklist from '../components/DailyChecklist';

const HomePage: Component = () => {
  return (
    <div class="page home-page">
      <header class="page-header">
        <h1>Welcome to LivingCycle</h1>
        <p>Your daily life organization assistant</p>
      </header>
      
      <section class="quick-actions-section">
        <h2>Quick Actions</h2>
        <QuickActions />
      </section>
      
      <section class="daily-checklist-section">
        <h2>Today's Structure</h2>
        <DailyChecklist />
      </section>
    </div>
  );
};

export default HomePage;