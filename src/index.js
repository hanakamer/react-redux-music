import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Router, Route, browserHistory } from 'react-router';
 import App from './App';
import './index.css';
import reducer from "./reducers";
import TagsBody from './components/TagsBody';
import TagArtists from './components/TagArtists'
import Artist from './components/Artist'

const logger = createLogger();

const middleware = applyMiddleware(thunk, logger);



const store = createStore(reducer, middleware)
const Routes=(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ App }>
        <Route path='/tags' component={ TagsBody } />
        <Route path='tags/(:tag)' component={ TagArtists } />
        <Route path='artists/:artist' component={ Artist } />
      </Route>
    </Router>
  </Provider>
)
ReactDOM.render( Routes,document.getElementById('root'));
