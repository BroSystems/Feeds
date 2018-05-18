import {
    CREATE_FEED,
    DELETE_FEED,
    GET_FEED_LIST,
    FEED_ACTION_FAILED
} from '../Actions/Types';

const FEEDS_INITIAL_STATE = {
    feeds: [],
    error: null,
    didLoad: false,
    pageNumber: 0,
    newFeed: null
};

export default (state = FEEDS_INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_FEED: 
            return { ...state, newFeed: action.payload };
        case DELETE_FEED:
            return { ...state, feeds: action.payload };
        case GET_FEED_LIST:
            return { ...state, feeds: action.payload, pageNumber: state.pageNumber + 1 };
        case FEED_ACTION_FAILED:
            return { ...state, error: action.payload };
        default: 
            return state
    }
}