import { Component } from 'solid-js';
import { A } from '@solidjs/router';

const Navigation: Component = () => {
  return (
    <nav class="navigation">
      <div class="nav-brand">
        <A href="/">LivingCycle</A>
      </div>
      
      <ul class="nav-links">
        <li>
          <A href="/" activeClass="active">
            Home
          </A>
        </li>
        <li>
          <A href="/spontaneity" activeClass="active">
            Spontaneity
          </A>
        </li>
        <li>
          <A href="/resources" activeClass="active">
            Resources
          </A>
        </li>
        <li>
          <A href="/routines" activeClass="active">
            Routines
          </A>
        </li>
        <li>
          <A href="/settings" activeClass="active">
            Settings
          </A>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;