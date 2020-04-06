import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = process.env.REACT_APP_BLOG_API;

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
