import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import LoginComponent from './src/Components/Screens/LoginComponent';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginComponent/>
      </Provider>
    );
  }
}