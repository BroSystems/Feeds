import { combineReducers } from 'redux';
import user from './UserReducer';
import feeds from './FeedsReducer';

export default combineReducers({
    user,
    feeds
});