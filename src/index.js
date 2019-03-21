import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/components/App.jsx';
import index from "./js/index";
import { Provider } from "react-redux";
import store from "./js/store/index";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'));
