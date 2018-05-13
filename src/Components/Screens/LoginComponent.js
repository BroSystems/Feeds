import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View
} from 'react-native';
import {
  RkButton,
  RkTextInput,
  RkCard,
  RkComponent
} from 'react-native-ui-kitten';

import {
  usernameChanged, 
  passwordChanged,
  authenticateUser,
  registerNewUser
} from '../../Actions';

class LoginComponent extends Component {

  constructor() {
    super();
  }

  onUsernameChange(text) {
    usernameChanged(text => {
      console.log(text);
    });
  }

  onPasswordChange(text) {
    passwordChanged(text);
  }

  onLoginPressed() {
    const { username, password } = this.props;
    this.props.authenticateUser({ username,password });
  }

  onRegisterPressed() {
    const { username, password } = this.props;
    console.log(this.props.username);
    this.props.registerNewUser(username,password);
  }

  render() {
    if (this.props.isLogged) {
      return (
        <View>
          <Text>{`${this.props.username} has logged in successfully`}</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <RkCard>
          <RkTextInput 
              placeholder='Email'
              value= {this.props.username}
              onChangeText={this.onUsernameChange.bind(this)}/>
            <RkTextInput 
              placeholder='Password'
              value= {this.props.password}
              onChangeText={this.onPasswordChange.bind(this)}
              secureTextEntry={true}/>
        </RkCard>
        <RkButton 
            style={styles.button}
            onPress={this.onLoginPressed.bind(this)}
            enabled={false}>
          Login
        </RkButton>
        <RkButton 
            style={styles.button}
            onPress={this.onRegisterPressed.bind(this)}>
          Register
        </RkButton>
      </View>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    padding: 12,
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    height: '100%'
  },
  button: {
    alignSelf: 'center',
    padding: 12,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    usernameChanged: username => dispatch(usernameChanged(username)),
    passwordChanged: dispatch(passwordChanged),
    authenticateUser: authenticateUser,
    registerNewUser: registerNewUser
  }
}
const mapStateToProps = state => {
  // const { username, password, isPending, isLogged, isRegistered } = state.user
  console.log(`new state = ${state.user}`);
  return {
    username: state.user.username,
    password: state.user.password
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
