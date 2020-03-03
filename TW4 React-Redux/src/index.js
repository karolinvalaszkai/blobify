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

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
