import React from 'react';
import ReactDOM from 'react-dom';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(application, document.getElementById('root'));
