import axios from 'axios';

import {
    FETCH_MESSAGES,
    POST_MESSAGE
} from './Types';

const messages_json = require('../../Data/Messages.json');

export const fetchMessages = ({page = 0,feed = {},userId = ''}) => {

    return dispatch => {
        const request = axios.get('https://api.mockaroo.com/api/acb6b990?count=10&key=ac886280');


        const { message_style={}, message_actions={} } = feed.config;

        console.log(feed);
        
        request
            .then(json => {
                dispatch({
                    type: FETCH_MESSAGES,
                    payload: {
                        data: {
                            messages: json.data,
                            page: page + 1,
                            feedID: feed.id,
                            messageStyle: message_style,
                            messageActions: message_actions
                        },
                    }
                });
            })
            .catch(error => {
                console.log(`Error Occured Fetching Messages - ${error}`);
                dispatch({
                    type: FETCH_MESSAGES,
                    payload: {
                        data: {
                            messages: [],
                            page: page + 1,
                            feed: feed,
                            messageStyle:{},
                            messageActions:{}
                        },
                        error: error
                    }
                });
            });
    }
};

// export const postMessage = ({ message = {}, userId }) => {
//     return {
//         type: POST_MESSAGE,
//         payload: {
//             data: message,
//             error: null
//         }
//     };
// };




// Stubs
/*
        |top
        |---user
        |------username
        |------rank
        |middle
        |---message
        |------data
        |---------Detail1
        |------------element: Text 
        |------------value: 'hello' 
        |---------Detail2
        |------------element: Text 
        |------------value: 'world' 
        |---------Image
        |------------element: Image
        |------------value: 'link to the image' 
        |---------Description
        |------------element: Text
        |------------value: 'product description'

        |bottom
        |---actions
        |------like:
        |---------value:'',
*/