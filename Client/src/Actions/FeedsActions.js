import axios from 'axios';

import {
    GET_FEED_LIST, GET_FEED_LIST_FULFILLED, GET_FEED_LIST_PENDING
} from './Types';

export const createNewFeed = (name, config) => {
    
};

export const deleteFeed = (name) => {
    
};

export const getFeedList = ({ pageNumber }) => {
    
    return dispatch => {

        setTimeout(() => {
            dispatch(fetchingFeedsSuccess(require('../../Data/FeedsList.json')));
        }, 500);
        
        // dispatch(fetchingFeedsPending());
        // axios.get('https://api.mockaroo.com/api/55d750c0?count=10&key=ac886280')
        //     .then(json => dispatch(fetchingFeedsSuccess(json.data)))
        //     .catch(error => dispatch(fetchingFeedsFailed(error)));
    };
};

const fetchingFeedsPending = () => {
    return {
        type: GET_FEED_LIST_PENDING,
    };
};

const fetchingFeedsSuccess = (response) => {
    return {
        type: GET_FEED_LIST_FULFILLED,
        payload: {
            feeds: response,
            didLoad: true
        }
    };
};

const fetchingFeedsFailed = (response) => {
    return {
        type: GET_FEED_LIST_FULFILLED,
        payload: {
            error: response
        }
    };
};