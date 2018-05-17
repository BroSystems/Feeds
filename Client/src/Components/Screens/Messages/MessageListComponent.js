import React, {Component} from 'react';

import {
    View,
    Text,
    ListView,
} from 'react-native';

import FeedCell from '../Feeds/FeedCell';

export default class MessageListComponent extends Component {
    render() {
        const item = {
            id: 0,
            name: 'feed 1',
        };

        return (
            <View style={styles.container}>
                <FeedCell item={ item }/>
                <Text>Messages Component</Text>
            </View>
        );
    }
}







const styles = {
    container: {
        flex: 1,
        alignContent: 'center',
    }
};
