import { database } from '../database';

import {
    USERNAME_ENTERED,
    PASSWORD_ENTERED,
    REGISTER_USER,
    LOGIN_USER
} from './Types';
import { Actions } from 'react-native-router-flux';

export const usernameChanged = username => {
    return {
        type: USERNAME_ENTERED,
        payload: String(username).toLowerCase()
    };
};

export const passwordChanged = password => {
    return {
        type: PASSWORD_ENTERED,
        payload: password
    };
};

export const registerNewUser = ({ username = '', password = '' }) => {
    // request to register to database
    if (isValidEmail(username) && isValidPassword(password) && !isUserExist(username)) {
        username = String(username).toLowerCase();
        database.insert({ username, password });
        return {
            type: REGISTER_USER,
            payload: true
        };
    }
    return {
        type: REGISTER_USER,
        payload: false
    };
    // need to implement request to register
    
};

export const authenticateUser = ({ username = '', password = '' }) => {
    // request to login to database

    const row = database.selectOne(row => row.username === String(username).toLowerCase());

    if (row != null && row.password === password) {
        return {
            type: LOGIN_USER,
            payload: true
        };
    }
    // need to implement request to login
    return {
        type: LOGIN_USER,
        payload: false
    };
};

const isValidEmail = email => {
    if (email != null && email.length > 0) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    return false;
};

const isValidPassword = password => {
    if (password != null && password.length > 4 && password.length < 20) {
        return true;
    }
    return false;
};

const isUserExist = username => {
    return database.selectOne(row => row.username === username) != null;
}