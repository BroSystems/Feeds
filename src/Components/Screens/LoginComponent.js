import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text
} from 'react-native';
import {
  RkButton,
  RkTextInput,
  RkCard,
  RkComponent,
  RkText
} from 'react-native-ui-kitten';

import * as actions from '../../Actions/UserActions';

class LoginComponent extends Component {

  constructor() {
    super();
  }

  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPressed() {
    const { username, password } = this.props;
    this.props.authenticateUser(username,password);
  }

  onRegisterPressed() {
    const { username, password } = this.props;
    this.props.registerNewUser(username,password);
  }

  renderBottomPart() {
    if (this.props.isLogged) {
      return (<RkText>Login Successfully!</RkText>)
    } else if (this.props.isRegistered) {
      return (<RkText>Registered Successfully!</RkText>)
    } else {
      return (<RkText>enter your credentials in order to log in</RkText>)
    }
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
            {this.renderBottomPart()}
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
  const { username, password, isPending, isLogged, isRegistered } = user
  return {
    username,
    password,
    isPending,
    isLogged,
    isRegistered
  }
}

export default connect(mapStateToProps, actions)(LoginComponent);
