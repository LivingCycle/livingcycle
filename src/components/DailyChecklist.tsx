import { Component, createSignal, For } from 'solid-js';
import { loadChecklist, saveChecklist } from '../utils/storage';

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  time?: string;
}

const DailyChecklist: Component = () => {
  const defaultItems: ChecklistItem[] = [
    { id: '1', text: 'Morning routine', completed: false, time: '8:00 AM' },
    { id: '2', text: 'Take medications', completed: false, time: '9:00 AM' },
    { id: '3', text: 'Eat breakfast', completed: false, time: '9:30 AM' },
    { id: '4', text: 'Go for a walk', completed: false, time: '11:00 AM' },
    { id: '5', text: 'Lunch break', completed: false, time: '12:30 PM' },
    { id: '6', text: 'Afternoon activity', completed: false, time: '3:00 PM' },
    { id: '7', text: 'Dinner', completed: false, time: '6:00 PM' },
    { id: '8', text: 'Evening routine', completed: false, time: '9:00 PM' }
  ];
  
  const [items, setItems] = createSignal<ChecklistItem[]>(
    loadChecklist() || defaultItems
  );
  
  const toggleItem = (id: string) => {
    const updated = items().map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updated);
    saveChecklist(updated);
  };
  
  const completedCount = () => items().filter(item => item.completed).length;
  const totalCount = () => items().length;
  const progressPercent = () => Math.round((completedCount() / totalCount()) * 100);

  return (
    <div class="daily-checklist">
      <div class="checklist-progress">
        <div class="progress-text">
          {completedCount()} of {totalCount()} completed ({progressPercent()}%)
        </div>
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            style={{ width: `${progressPercent()}%` }}
          />
        </div>
      </div>
      
      <ul class="checklist-items">
        <For each={items()}>
          {(item) => (
            <li class={`checklist-item ${item.completed ? 'completed' : ''}`}>
              <button
                class="checkbox"
                onClick={() => toggleItem(item.id)}
                aria-label={item.completed ? 'Mark as incomplete' : 'Mark as complete'}
              >
                {item.completed && '✓'}
              </button>
              <span class="item-text">{item.text}</span>
              {item.time && <span class="item-time">{item.time}</span>}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default DailyChecklist;