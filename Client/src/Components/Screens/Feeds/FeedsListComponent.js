import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../Actions/FeedsActions';
import {
    View,
    Text,
    FlatList,
    ImageBackground
} from 'react-native';

import {

} from 'react-native-ui-kitten';

import FeedCell from './FeedCell';

class FeedsListComponent extends Component {

    constructor() {
        super();
        const Background = '../../../../Design/trees_feed.png';
        
        this.feeds = [
            {id: 0, name: 'feed 1', image: Background},
            {id: 1, name: 'feed 2', image: Background},
            {id: 2, name: 'feed 3', image: Background},
            {id: 3, name: 'feed 4', image: Background},
            {id: 4, name: 'feed 5', image: Background},
            {id: 5, name: 'feed 6', image: Background},
            {id: 6, name: 'feed 7', image: Background}
        ];
    }

    render() {
        return (
            <View styles = {styles.container}>
                <FlatList
                    data={this.feeds}
                    renderItem={item => FeedCell(item)}
                />
            </View>
        );
    }
}

export default connect(null, actions)(FeedsListComponent)

const styles = {
    container: {
        flex:1,
        width: '90%'
    },
};