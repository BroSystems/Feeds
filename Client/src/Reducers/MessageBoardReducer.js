import {
    FETCH_MESSAGES,
    POST_MESSAGE
} from '../Actions/Types.js';

const INITIAL_STATE = {
    messages:{
        data: [],
        page: 0,
        hasMore: true,
        isLoading: false
    },
    feed:null,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    console.log('state - ' + JSON.stringify(state, null, 2));
    console.log('action - ' + action.type);
    switch (action.type) {
        case FETCH_MESSAGES:
            if (!action.payload) {
                return state;
            }
            const { data, page, feed} = action.payload.data;
            return { ...state, 
                messages: {
                    data:[...data],
                    page: page,
                }, 
                feed,
                error: action.payload.error
            };
        case POST_MESSAGE:
            return { ...state,
                messages: [...messages, action.payload.data],
                error: action.payload.error
            };
        default:
            console.log('Default');
            return state;
    }
}