import { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';

const QuickActions: Component = () => {
  const navigate = useNavigate();
  
  const actions = [
    {
      label: 'Call 211',
      description: 'Community resources',
      action: () => navigate('/resources'),
      urgent: false
    },
    {
      label: 'Crisis Support',
      description: 'Get help now',
      action: () => window.location.href = 'tel:988',
      urgent: true
    },
    {
      label: 'Daily Routine',
      description: 'View your schedule',
      action: () => navigate('/routines'),
      urgent: false
    },
    {
      label: 'Call Scripts',
      description: 'Practice what to say',
      action: () => navigate('/resources'),
      urgent: false
    }
  ];

  return (
    <div class="quick-actions">
      {actions.map((action) => (
        <button
          class={`quick-action-btn ${action.urgent ? 'urgent' : ''}`}
          onClick={action.action}
        >
          <span class="action-label">{action.label}</span>
          <span class="action-description">{action.description}</span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;