import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App/App';
import { ghPagesRedirect } from 'util/ghPagesUtil';
import * as serviceWorker from './serviceWorker';

// If user is on gh-pages, we use a trick to redirect 404 pages back to our SPA
ghPagesRedirect(window.location);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
