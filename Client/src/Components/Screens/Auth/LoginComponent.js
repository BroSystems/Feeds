import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  Button,
  FormInput,
  Card,
} from 'react-native-elements';

import * as actions from '../../../Actions/UserActions';

class LoginComponent extends Component {

  constructor() {
    super();
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLoginPressed = this.onLoginPressed.bind(this);
    this.onRegisterPressed = this.onRegisterPressed.bind(this);
    this.errorType = this.errorType.bind(this);
  }
  
  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPressed() {
    this.props.authenticateUser(this.props);
  }

  onRegisterPressed() {
    this.props.registerNewUser(this.props);
  }

  errorType = () => {
    if (this.props.isLogged) {
      return 'Login Successfully!'
    } else if (this.props.isRegistered) {
      return 'Registered Successfully!'
    } else {
      return 'enter your credentials in order to log in';
    }
  }

  render() {
    if (this.props.isLogged) {
      this.props.navigation.navigate('Feeds');
    }
    return (
      <View style={styles.container}>
        <View styoe={styles.content}>
            <FormInput 
                placeholder='Email'
                value= {this.props.username}
                containerStyle={styles.fieldContainer}
                inputStyle={{width:'100%'}}
                onChangeText={this.onUsernameChange.bind(this)}/>
              <FormInput 
                placeholder='Password'
                value= {this.props.password}
                style={styles.input}
                containerStyle={styles.fieldContainer}
                inputStyle={{width:'100%'}}
                onChangeText={this.onPasswordChange.bind(this)}
                secureTextEntry={true}/>
              <Text>{this.errorType()}</Text>
          <Button 
              style={{paddingVertical: 8,}}
              buttonStyle={styles.button}
              onPress={this.onLoginPressed.bind(this)}
              title='Login'/>
          <Button 
              buttonStyle={styles.button}
              onPress={this.onRegisterPressed.bind(this)}
              title = 'Register'/>
        </View>
      </View>
    );
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    alignContent: 'stretch',
    backgroundColor: '#ffffff',
    height: '100%'
  },
  content: {
    flex:1,
    backgroundColor: 'transparent'
  },
  input: {
    paddingVertical: 4,
  },
  fieldContainer: {
      backgroundColor: '#B8BCCC',
      paddingHorizontal: 24,
      paddingVertical: 4,
      marginVertical: 8,
  },
  button: {
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 22,
    height: 44,
    paddingVertical: 4,
    backgroundColor: '#C2CCB8'
  }
});
