import { combineReducers } from 'redux';
import user from './UserReducer';
import feedsReducer from './FeedsReducer';
import board from './MessageBoardReducer';
import messageReducer from './MessageItemReducer';

export default combineReducers({
    user,
    feedsReducer,
    board,
    messageReducer
});