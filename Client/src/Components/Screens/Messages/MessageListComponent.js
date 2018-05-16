import React from 'react';

import {
    View,
    Text,
    ListView,
} from 'react-native';

import FeedCell from '../Feeds/FeedCell';

export class MessageListComponent extends React.Component {
    
    render() {
        const item = {
            id: 0,
            name: 'feed 1',
            image: Background
        };

        return (
            <View style={styles.container}>
                {FeedCell({item})}
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
