import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'typeface-roboto';
import reduxThunk from 'redux-thunk';
import reducers from './_reducers';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
