/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import dva from 'dva/mobile';
import Counter from './pages/Counter';

const app = dva();
app.model(require('./models/count.js'));
app.router(() => <Counter />);

AppRegistry.registerComponent('DvaExampleReactNative', () => app.start());
