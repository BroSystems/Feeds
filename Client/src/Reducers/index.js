import { combineReducers } from 'redux';
import user from './UserReducer';
import feeds from './FeedsReducer';
import board from './MessageBoardReducer';

export default combineReducers({
    user,
    feeds,
    board
});