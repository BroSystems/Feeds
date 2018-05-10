
import {
    USERNAME_ENTERED,
    PASSWORD_ENTERED,
    LOGIN_USER,
    REGISTER_USER
} from '../Actions/Types';

USER_INITIAL_STATE = {
    username: null,
    selectedPassword: null,
    isPending: false,
    isLogged: false,
    isRegistered: false
};

export default UserReducer = (state = USER_INITIAL_STATE, action) => {
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