import axios from 'axios';
import _ from 'lodash';

import {
    FETCH_MESSAGES,
    POST_MESSAGE
} from './Types';

export const fetchMessages = ({page = 0, feed = {}, userId = ''}) => {
    return dispatch => {
        if (!feed) {
            dispatch(fetchingMessagesFailed({
                error:'No Feed Object Was Passed'
            }));
        } else {
            dispatch(fetchingMessageSuccess({
                        page: page + 1,
                        feed,
                        userId,
                        messages: require('../../Data/Messages.json')
                    }));
        }
                
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
                messages: mergeMessageStyleAndActions({ 
                    messages, 
                    style: message_style, 
                    actions: message_actions
                }), page, feed,
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

export const mergeMessageStyleAndActions = ({ messages = [], style = {}, actions = {} }) => {
    _.forEach(messages, msg => {
        // merges data part
        // console.log(JSON.stringify(Object.keys(msg.data),null,2));
        _.forEach(Object.keys(msg.data), item => {
            // getting style for item from Feed Message Style Config 
            const styleValue = style[item];
            if (!styleValue) {
                console.log(`Item ${item} has no style defined`);
                return;
            }
            msg.data[item].style = styleValue;
        });
        // merges actions part
        // console.log(JSON.stringify(Object.keys(msg.actions),null,2));
        _.forEach(Object.keys(msg.actions), item => {
            const action = actions[item];
            if (!action) {
                console.log(`Item \'${item}\' has no actions defined`);
                return;
            }
            const { actionType, icon } = actions[item];
            msg.actions[item].icon = icon;
            msg.actions[item].actionType = actionType;
            console.log(JSON.stringify(msg.actions[item],null,2));
        });
    });
    return messages;
};