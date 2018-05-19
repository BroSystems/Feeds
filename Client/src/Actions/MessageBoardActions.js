import {
    FETCH_MESSAGES,
    POST_MESSAGE
} from './Types';

const messages = [{
    id: 0,
    data: {
        top: {
            user: {
                username: '',
                rank: 0
            }
        },
        middle: {
            message: {
                data: {
                    from: 'Be\'er Sheva',
                    to: 'Tel Aviv',
                    depart_time: '2222-02-31T18:25:43.511Z',
                    sits: 4,
                    car_type: 'Lamburgini Diablo',
                    description: 'hi fuckers,\nThere isn\'t to much space for lugage so fuck you'
                }
            }
        },
        bottom: {
            actions: {
                like: {
                    label: 'Upvote Driver',
                    icon: null,
                    initial_value: true
                },
                add_self: {
                    label: 'Join',
                    icon: null,
                    initial_value: false
                }
            }
        }
    }
}];

export const fetchMessages = ({ page = 0, feed = null, userId = '' }) => {
    return {
        type: FETCH_MESSAGES,
        payload: { 
            data: {
                data: messages,
                page: page + 1,
                feed: feed,
            },
            error: null
        }
    };
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

