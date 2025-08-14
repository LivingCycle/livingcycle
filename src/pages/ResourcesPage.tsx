import { Component, createSignal } from 'solid-js';
import CallScript from '../components/CallScript';
import { helplines } from '../data/helplines';

const ResourcesPage: Component = () => {
  const [selectedResource, setSelectedResource] = createSignal<string>('211');

  return (
    <div class="page resources-page">
      <header class="page-header">
        <h1>Community Resources</h1>
        <p>Help is available - Scripts and numbers to make calling easier</p>
      </header>
      
      <section class="emergency-banner">
        <strong>Emergency?</strong> Call 911 immediately
      </section>
      
      <section class="resource-grid">
        <div class="resource-card">
          <h3>211 - Community Services</h3>
          <p>Housing, food, healthcare, job search, vocational rehabilitation</p>
          <button 
            class="primary-button"
            onClick={() => setSelectedResource('211')}
          >
            Get Call Script
          </button>
          <a href="tel:211" class="call-button">
            Call 211
          </a>
        </div>
        
        <div class="resource-card">
          <h3>988 - Crisis Support</h3>
          <p>24/7 emotional support and crisis intervention</p>
          <button 
            class="primary-button"
            onClick={() => setSelectedResource('988')}
          >
            Get Call Script
          </button>
          <a href="tel:988" class="call-button">
            Call 988
          </a>
        </div>
        
        <div class="resource-card">
          <h3>Vocational Rehabilitation</h3>
          <p>Job training, career counseling, and employment support for people with disabilities</p>
          <div class="script-options">
            <button 
              class="script-option-btn"
              onClick={() => setSelectedResource('vocational-rehab')}
            >
              Detailed Script
            </button>
            <button 
              class="script-option-btn"
              onClick={() => setSelectedResource('vocational-rehab-simple')}
            >
              Simple Script
            </button>
            <button 
              class="script-option-btn"
              onClick={() => setSelectedResource('vocational-rehab-nervous')}
            >
              If You're Nervous
            </button>
          </div>
          <p class="resource-note">Find your state's VR office through 211 or search online</p>
        </div>
      </section>
      
      {selectedResource() && (
        <CallScript resourceType={selectedResource()} />
      )}
    </div>
  );
};

export default ResourcesPage;