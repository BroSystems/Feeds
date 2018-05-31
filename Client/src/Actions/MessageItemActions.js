import axios from 'axios';
import {
    RESOLVE_MESSAGE_ACTION_FAILED, 
    RESOLVE_MESSAGE_ACTION_SUCCESS,
} from './Types';

import {
    JOIN_MESSAGE_GROUP,
    LIKE_MESSAGE_OWNER,
    likeMessageOwner,
    joinMessageGroup
} from './MessageItemCustomActions';

export const resolveMessageAction = ({ action, messageID }) => {    
    return dispatch => {
        setTimeout(() => {
            const { updatedAction, error } = resolveAction(action);
            if (!updatedAction || error) {
                return resolveMessageActionFailed(error);
            }
            const ans = resolveMessageActionSuccess(updatedAction);
        }, 500);
    };
};

export const resolveAction = (action) => {
    switch (action.actionType) {
        case LIKE_MESSAGE_OWNER: return likeMessageOwner(action);
        case JOIN_MESSAGE_GROUP: return joinMessageGroup(action);
        default: return { 
            action: null, 
            error: `Action \'${action.actionType}\' doesn't exist in this version` 
        };
    }
};

const resolveMessageActionSuccess = (action) => {
    return {
        type: RESOLVE_MESSAGE_ACTION_SUCCESS,
        payload: action
    };
};

const resolveMessageActionFailed = (error) => {
    return {
        type: RESOLVE_MESSAGE_ACTION_FAILED,
        payload: error
    };
};