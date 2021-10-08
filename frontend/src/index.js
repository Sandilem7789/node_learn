import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import react redux package
import { Provider } from 'react-redux' //provider will provide the entire app with a state
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <App />
  </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
