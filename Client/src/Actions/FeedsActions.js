import {
    GET_FEED_LIST
} from './Types';

export const createNewFeed = (name, config) => {

};

export const deleteFeed = (name) => {

};

export const getFeedList = ({ pageNumber }) => {
    const feeds = require('../../Data/FeedsList.json');
    return {
        type: GET_FEED_LIST,
        payload: feeds
    };
};