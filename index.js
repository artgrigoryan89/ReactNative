import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './src/App';
import configureStore from './src/configureStore';
import {name as appName} from './app.json';

const store = configureStore();

const Project = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Project);
