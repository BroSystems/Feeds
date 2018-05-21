import {
    FETCH_MESSAGES,
    POST_MESSAGE
} from '../Actions/Types.js';

const INITIAL_STATE = {
    messages:{
        data: [],
        page: 0,
        hasMore: true,
        isLoading: false,
    },
    feed:null,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MESSAGES:
            // console.log(action.payload);

            const { data, error } = action.payload;
            const { messages, page, feed } = data;
            console.log(data);
            return {...state, 
                    messages: {
                        data: [...messages],
                        page,
                        hasMore: (messages.length > 0),
                        isLoading: false
                    },
                    feed,
                    error
            };
        case POST_MESSAGE:
            return { ...state,
                messages: [...messages, action.payload.data],
                error: action.payload.error
            };
        default:
            return state;
    }
}