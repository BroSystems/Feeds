import axios from 'axios';

import {
    FETCH_MESSAGES,
    POST_MESSAGE
} from './Types';

const messages_json = require('../../Data/Messages.json');

export const fetchMessages = ({page = 0,feed = null,userId = ''}) => {

    return dispatch => {
        const request = axios.get('https://api.mockaroo.com/api/acb6b990?count=10&key=ac886280');

        request
            .then(json => {
                dispatch({
                    type: FETCH_MESSAGES,
                    payload: {
                        data: {
                            data: json.data,
                            page: page + 1,
                            feed: feed,
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
                            data: [],
                            page: page + 1,
                            feed: feed,
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