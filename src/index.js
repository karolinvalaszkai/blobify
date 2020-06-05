import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import './style.css'

// Retrieve saved model
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};
const store = createStore(rootReducer, persistedState);
// Update stored state when model changes
store.subscribe(() =>
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
);

//get client IP adress
fetch("https://api.ipify.org?format=json").then(response => {
  return response.json();
}, "jsonp").then(res => {
  console.log('My IP', res.ip);
  localStorage.setItem('ClientIPAddress', res.ip);
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}).catch(err => console.log(err));


