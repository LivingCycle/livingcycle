import { Component, createSignal, For } from 'solid-js';

interface SpontaneousIdea {
  id: string;
  text: string;
  category: 'adventure' | 'creative' | 'social' | 'self-care' | 'random';
  energy: 'low' | 'medium' | 'high';
}

const SpontaneityPage: Component = () => {
  const ideas: SpontaneousIdea[] = [
    // Low energy
    { id: '1', text: 'Listen to a new genre of music', category: 'creative', energy: 'low' },
    { id: '2', text: 'Write a thank you note to someone', category: 'social', energy: 'low' },
    { id: '3', text: 'Try a 5-minute meditation', category: 'self-care', energy: 'low' },
    { id: '4', text: 'Doodle or sketch something', category: 'creative', energy: 'low' },
    { id: '5', text: 'Watch clouds and find shapes', category: 'random', energy: 'low' },
    { id: '6', text: 'Text an old friend', category: 'social', energy: 'low' },
    
    // Medium energy
    { id: '7', text: 'Take a different route home', category: 'adventure', energy: 'medium' },
    { id: '8', text: 'Cook something without a recipe', category: 'creative', energy: 'medium' },
    { id: '9', text: 'Rearrange one room', category: 'self-care', energy: 'medium' },
    { id: '10', text: 'Learn 5 words in a new language', category: 'creative', energy: 'medium' },
    { id: '11', text: 'Take photos of interesting textures', category: 'creative', energy: 'medium' },
    { id: '12', text: 'Try a new coffee shop', category: 'adventure', energy: 'medium' },
    
    // High energy
    { id: '13', text: 'Go for a walk without a destination', category: 'adventure', energy: 'high' },
    { id: '14', text: 'Visit a local museum or gallery', category: 'adventure', energy: 'high' },
    { id: '15', text: 'Join a community event', category: 'social', energy: 'high' },
    { id: '16', text: 'Try a new physical activity', category: 'self-care', energy: 'high' },
    { id: '17', text: 'Explore a neighborhood you\'ve never been to', category: 'adventure', energy: 'high' },
    { id: '18', text: 'Attend a free local event', category: 'social', energy: 'high' },
  ];
  
  const [currentIdea, setCurrentIdea] = createSignal<SpontaneousIdea | null>(null);
  const [energyLevel, setEnergyLevel] = createSignal<'any' | 'low' | 'medium' | 'high'>('any');
  const [usedIdeas, setUsedIdeas] = createSignal<Set<string>>(new Set());
  
  const getRandomIdea = () => {
    const filteredIdeas = ideas.filter(idea => {
      const matchesEnergy = energyLevel() === 'any' || idea.energy === energyLevel();
      const notUsed = !usedIdeas().has(idea.id);
      return matchesEnergy && notUsed;
    });
    
    if (filteredIdeas.length === 0) {
      // Reset if all ideas have been used
      setUsedIdeas(new Set());
      return getRandomIdea();
    }
    
    const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
    const idea = filteredIdeas[randomIndex];
    
    setCurrentIdea(idea);
    setUsedIdeas(prev => new Set([...prev, idea.id]));
  };
  
  const getCategoryEmoji = (category: string) => {
    switch(category) {
      case 'adventure': return '🗺️';
      case 'creative': return '🎨';
      case 'social': return '👥';
      case 'self-care': return '💚';
      case 'random': return '✨';
      default: return '💫';
    }
  };
  
  const getEnergyEmoji = (energy: string) => {
    switch(energy) {
      case 'low': return '🔋';
      case 'medium': return '🔋🔋';
      case 'high': return '🔋🔋🔋';
      default: return '';
    }
  };

  return (
    <div class="page spontaneity-page">
      <header class="page-header">
        <h1>Spontaneity</h1>
        <p>Break the routine - Try something unexpected today</p>
      </header>
      
      <section class="energy-selector">
        <h3>How's your energy level?</h3>
        <div class="energy-buttons">
          <button 
            class={`energy-btn ${energyLevel() === 'any' ? 'active' : ''}`}
            onClick={() => setEnergyLevel('any')}
          >
            Any Level
          </button>
          <button 
            class={`energy-btn ${energyLevel() === 'low' ? 'active' : ''}`}
            onClick={() => setEnergyLevel('low')}
          >
            Low 🔋
          </button>
          <button 
            class={`energy-btn ${energyLevel() === 'medium' ? 'active' : ''}`}
            onClick={() => setEnergyLevel('medium')}
          >
            Medium 🔋🔋
          </button>
          <button 
            class={`energy-btn ${energyLevel() === 'high' ? 'active' : ''}`}
            onClick={() => setEnergyLevel('high')}
          >
            High 🔋🔋🔋
          </button>
        </div>
      </section>
      
      <section class="idea-generator">
        <button 
          class="generate-btn"
          onClick={getRandomIdea}
        >
          {currentIdea() ? 'Try Something Else' : 'Surprise Me!'}
        </button>
        
        {currentIdea() && (
          <div class="idea-card">
            <div class="idea-header">
              <span class="idea-category">
                {getCategoryEmoji(currentIdea()!.category)}
              </span>
              <span class="idea-energy">
                {getEnergyEmoji(currentIdea()!.energy)}
              </span>
            </div>
            <p class="idea-text">{currentIdea()!.text}</p>
            <div class="idea-footer">
              <span class="category-label">{currentIdea()!.category}</span>
              <span class="energy-label">{currentIdea()!.energy} energy</span>
            </div>
          </div>
        )}
      </section>
      
      <section class="spontaneity-tips">
        <h3>Why Spontaneity Matters</h3>
        <ul>
          <li>Breaks negative thought patterns</li>
          <li>Creates new neural pathways</li>
          <li>Adds joy and surprise to daily life</li>
          <li>Builds confidence through small adventures</li>
          <li>Reminds you that you have choices</li>
        </ul>
      </section>
    </div>
  );
};

export default SpontaneityPage;