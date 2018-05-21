import axios from 'axios';
import _ from 'lodash';

import {
    FETCH_MESSAGES,
    POST_MESSAGE
} from './Types';

export const fetchMessages = ({page = 0, feed = {}, userId = ''}) => {
    return dispatch => {
        dispatch(fetchingMessageSuccess({
                    page: page + 1,
                    feed,
                    userId,
                    messages: require('../../Data/Messages.json')
                }));
                
        // axios.get('https://api.mockaroo.com/api/acb6b990?count=10&key=ac886280')
        //     .then(json => dispatch(fetchingMessageSuccess({ page: page+1, feed, userId, messages: json.data })))
        //     .catch(error => dispatch(fetchingMessagesFailed({ error })));
    };
};

const fetchingMessageSuccess = ({ page = 0, feed = {}, userId = '', messages = [] }) => {
    const { message_style={}, message_actions={} } = feed.config;
    return {
        type: FETCH_MESSAGES,
        payload: {
            data: {
                messages:mergeMessageStyleAndActions({ 
                    messages, 
                    style: message_style, 
                    actions: message_actions }), 
                page, 
                feedID: feed.id,
                messageStyle: message_style,
                messageActions: message_actions
            },
        }
    };
};

const fetchingMessagesFailed = ({ error }) => {
    console.log(`Error Occured Fetching Messages - ${error}`);
    dispatch({
        type: FETCH_MESSAGES,
        payload: {
            error: error
        }
    });
};

export const mergeMessageStyleAndActions = ({ messages = [], style = null, actions = null }) => {
    _.forEach(messages, msg => {
        // merges body part
        if (style) {
            _.forEach(Object.keys(msg.data.middle.message), key => {
                const value = msg.data.middle.message[key];
                msg.data.middle.message[key] = { value, style };
            });
        }
        // merges bottom part
        if (actions) {
            _.forEach(Object.keys(msg.data.bottom), key => {
                const { action, icon } = actions[key];
                msg.data.bottom[key].actionType = action;
                msg.data.bottom[key].icon = icon;
            });
        }
    });
    
    return messages;
};