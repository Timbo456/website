import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Testing TomTom api for parker. 

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


var el = document.getElementById('root')


ReactDOM.render((
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
), el);

registerServiceWorker();