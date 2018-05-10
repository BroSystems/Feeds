import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View
} from 'react-native';
import {
  RkButton,
  RkTextInput,
  RkCard
} from 'react-native-ui-kitten';

import {
  usernameEntered, 
  passwordEntered,
  authenticateUser,
  registerNewUser
} from '../../Actions';

class LoginComponent extends Component {

  onUsernameChange(text) {
    console.log(`Entered Email Is: ${text}`);
    usernameEntered(text);
  }

  onPasswordChange(text) {
    console.log(`Entered Password Is: ${text}`);
    passwordEntered(text);
  }

  onLoginPressed() {
    console.log(this.props);
    authenticateUser(this.props);
  }

  onRegisterPressed() {
    console.log("Register Pressed");
    registerNewUser(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <RkCard>
          <RkTextInput 
              label='Username'
              placeholder='aaa@aaa.aaa'
              onChangeText={this.onUsernameChange.bind(this)}/>
            <RkTextInput 
              label='Password'
              placeholder='********'
              onChangeText={this.onPasswordChange.bind(this)}
              secureTextEntry={true}/>
        </RkCard>
          <RkButton 
              style={styles.button}
              onPress={this.onLoginPressed.bind(this)}>
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

const mapStateToProps = (state, ownProps) => {
  console.log(`new state = ${state}`);
  return {
    username: state.username,
    password: state.password
  }
}

export default connect(mapStateToProps)(LoginComponent);

export const styles = {
  container: {
    display: 'flex',
    margin: 12
  },
  button: {
    alignSelf: 'center',
    padding: 12,
  }
}
