import { combineReducers } from 'redux';
import user from './UserReducer';
import feedsReducer from './FeedsReducer';
import board from './MessageBoardReducer';

export default combineReducers({
    user,
    feedsReducer,
    board
});