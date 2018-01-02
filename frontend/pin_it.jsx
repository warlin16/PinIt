import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  ReactDOM.render(<h1>Hey... is this thing on?</h1>, root);
});
