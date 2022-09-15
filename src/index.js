import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes'
import GlobalStyle from '../src/styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>
);

