/* eslint-disable import/default */

import './styles/styles.scss';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import _ from 'lodash';
import { loadState, saveState } from './services/LocalStorageService';
require('./favicon.ico');

const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(_.throttle(() => {
    saveState({
      weatherInfoReducer: store.getState().weatherInfoReducer      
    });
  }, 1000));


render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
