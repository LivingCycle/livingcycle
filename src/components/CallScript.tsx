import { Component, createSignal, Show } from 'solid-js';
import { scripts } from '../data/scripts';

interface CallScriptProps {
  resourceType: string;
}

const CallScript: Component<CallScriptProps> = (props) => {
  const [copied, setCopied] = createSignal(false);
  
  const script = () => scripts[props.resourceType] || scripts.default;
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(script().text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div class="call-script-container">
      <h3>Call Script for {props.resourceType}</h3>
      
      <div class="script-info">
        <h4>Before You Call - Have Ready:</h4>
        <ul>
          {script().checklist.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      
      <div class="script-text">
        <h4>What to Say:</h4>
        <p class="script-content">{script().text}</p>
      </div>
      
      <div class="script-actions">
        <button onClick={copyToClipboard} class="action-button">
          {copied() ? 'Copied!' : 'Copy Script'}
        </button>
      </div>
      
      <Show when={script().followUp}>
        <div class="follow-up">
          <h4>What They Might Ask:</h4>
          <ul>
            {script().followUp?.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </Show>
    </div>
  );
};

export default CallScript;