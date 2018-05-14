import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../Actions/FeedsActions';
import {
    View,
    Text,
    FlatList,
    ListView,
    ImageBackground
} from 'react-native';

import {

} from 'react-native-ui-kitten';

import FeedCell from './FeedCell';

class FeedsListComponent extends Component {

    constructor() {
        super();
        const Background = '../../../../Design/trees_feed.png';
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        const feeds = [
            {id: 0, name: 'feed 1', image: Background},
            {id: 1, name: 'feed 2', image: Background},
            {id: 2, name: 'feed 3', image: Background},
            {id: 3, name: 'feed 4', image: Background},
            {id: 4, name: 'feed 5', image: Background},
            {id: 5, name: 'feed 6', image: Background},
            {id: 6, name: 'feed 7', image: Background}
        ];
        this.state = {
            dataSource: ds.cloneWithRows(feeds),
        };
    }

    onRowSelection(item) {

    }

    render() {
        return (
            <View styles = {styles.container}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={item => FeedCell(item)}/>
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