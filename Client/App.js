import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import DefaultRouter from './DefaultRouter';
import ListTestingComponent from './src/Components/Screens/Tests/ListTestingComponent';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DefaultRouter/>
      </Provider>
    );
  }
}