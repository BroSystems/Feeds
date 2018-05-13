import { database } from '../database';

import {
    USERNAME_ENTERED,
    PASSWORD_ENTERED,
    REGISTER_USER,
    LOGIN_USER
} from './Types';

export const usernameChanged = username => {
    return {
        type: USERNAME_ENTERED,
        payload: username
    };
};

export const passwordChanged = password => {
    return {
        type: PASSWORD_ENTERED,
        payload: password
    };
};

export const registerNewUser = (username, password) => {
    // request to register to database
    console.log(`Requested To Register - ${username} to the system`);

    if (database.select(row => row.username == username).length == 0) {
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
    console.log(`Requested To Login - ${username,password} to the system`);
    if (database.select(row => row.username == username && row.password == password)) {
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

const isValidUserName = username => {
    if (username != null && username.length > 0) {
        return true;
    }
    return false;
};

const isValidPassword = password => {
    if (password != null && password.length > 0) {
        return true;
    }
    return false;
};