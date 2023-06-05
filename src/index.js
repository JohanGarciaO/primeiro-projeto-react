import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStore } from './contexts/userContext';
import { ThemeStore } from './contexts/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserStore>
      <ThemeStore>
        <App />
      </ThemeStore>
    </UserStore>
  </React.StrictMode>
);