import {
    USERNAME_ENTERED,
    PASSWORD_ENTERED,
    REGISTER_USER,
    LOGIN_USER
} from './Types';

export const usernameEntered = ({ username }) => {
    return {
        type: USERNAME_ENTERED,
        payload: username
    };
};

export const passwordEntered = ({ password }) => {
    return {
        type: PASSWORD_ENTERED,
        payload: password
    };
};

export const registerNewUser = ({ username = '', password = '' }) => {
    // need to implement request to register
    return {
        type: REGISTER_USER,
        payload: true
    };
};

export const authenticateUser = ({ username = '', password = '' }) => {
    // need to implement request to login
    return {
        type: LOGIN_USER,
        payload: true
    };
};