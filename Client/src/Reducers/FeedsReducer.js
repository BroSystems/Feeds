import {
    CREATE_FEED,
    DELETE_FEED,
    GET_FEED_LIST_PENDING,
    GET_FEED_LIST_FULFILLED,
    FEED_ACTION_FAILED
} from '../Actions/Types';

const FEEDS_INITIAL_STATE = {
    feeds: [],
    error: null,
    didLoad: false,
    pageNumber: 0,
    isLoading: false
};

export default (state = FEEDS_INITIAL_STATE, action) => {
    // console.log(action);
    
    switch(action.type) {
        case GET_FEED_LIST_PENDING:
            return { 
                ...state, 
                isLoading: true
            };
        case GET_FEED_LIST_FULFILLED:
            const { data, error, feeds, didLoad } = action.payload;
            return { ...state,
                feeds,
                error,
                pageNumber: state.pageNumber + 1,
                didLoad,
            };
        default: 
            return state
    }
}