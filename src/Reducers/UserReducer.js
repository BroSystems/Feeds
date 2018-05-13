
import {
    USERNAME_ENTERED,
    PASSWORD_ENTERED,
    LOGIN_USER,
    REGISTER_USER
} from '../Actions/Types';

const USER_INITIAL_STATE = {
    username: '',
    password: '',
    isPending: false,
    isLogged: false,
    isRegistered: false
};

export default (state = USER_INITIAL_STATE, action) => {
    console.log(`state - ${state}, action - ${action.type}`);
    switch (action.type) {
        case USERNAME_ENTERED:
            return { ...state, username: action.payload}
        case PASSWORD_ENTERED:
            return { ...state, password: action.payload}
        case LOGIN_USER:
            return { ...state, isLogged: action.payload}
        case REGISTER_USER:
            return { ...state, isRegistered: action.payload}
        default: return state;
    }
};