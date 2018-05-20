import {
    GET_FEED_LIST
} from './Types';

export const createNewFeed = (name, config) => {

};

export const deleteFeed = (name) => {

};

export const getFeedList = ({ pageNumber }) => {
    return dispatch => {
        dispatch({
            type: GET_FEED_LIST,
            payload: {
                data: {
                    feeds: require('../../Data/FeedsList.json'),
                    pageNumber: pageNumber + 1,
                    didLoad: true
                },
                error: null
            }
        });
    };
};