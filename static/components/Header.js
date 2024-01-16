// components/Header.js or Header.tsx if using TypeScript
import React from 'react';

function Header() {
  return (
    <header>
      <img src="/path-to-your-logo.png" alt="Logo" />
      <nav>
        <ul>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/playground">Playground</a></li>
        </ul>
      </nav>
      <div>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
