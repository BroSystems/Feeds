import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import DefaultRouter from './DefaultRouter';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DefaultRouter/>
      </Provider>
    );
  }
}