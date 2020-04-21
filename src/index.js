import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demo from './demo';

ReactDOM.render(
  <React.StrictMode>
    <Demo watch={true} settings={{enableHighAccuracy: false, timeout: Infinity, maximumAge: 0}} />
  </React.StrictMode>,
  document.getElementById('root')
);

