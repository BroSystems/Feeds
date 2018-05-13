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

import * as actions from '../../Actions/UserActions';

class LoginComponent extends Component {

  constructor() {
    super();
  }

  onUsernameChange(text) {
    this.props.usernameChanged(text => {
      console.log(text);
    });
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPressed() {
    const { username, password } = this.props;
    this.props.authenticateUser({
      username,
      password
    });
  }

  onRegisterPressed() {
    const { username, password } = this.props;
    console.log(this.props.username);
    this.props.registerNewUser((username,password) => {
      console.log(object)
    });
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

const mapStateToProps = ({ user }) => {
  // const { username, password, isPending, isLogged, isRegistered } = state.user
  return {
    username: user.username,
    password: user.password
  }
}

export default connect(mapStateToProps, actions)(LoginComponent);
