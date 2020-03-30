import React from 'react';
import ReactDOM from 'react-dom';


// Esse é o primeiro arquivo que o navegador irá ler.
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
