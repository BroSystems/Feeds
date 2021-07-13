import {
    JOIN_MESSAGE_GROUP,
    LIKE_MESSAGE_OWNER,
    RESOLVE_MESSAGE_ACTION_FAILED,
    RESOLVE_MESSAGE_ACTION_SUCCESS
} from '../Actions/Types';

export default (state = {}, action) => {
    // console.log(action);
    switch (action.type) {
        case RESOLVE_MESSAGE_ACTION_SUCCESS:
            return {...state, updatedAction: action.payload}
        case RESOLVE_MESSAGE_ACTION_FAILED:
            return {...state, error: action.payload }
        default:
            return state;
    }
};