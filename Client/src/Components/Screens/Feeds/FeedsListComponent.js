import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../Actions/FeedsActions';
import {
    View,
    Text,
    ListView,
    ImageBackground
} from 'react-native';

import {

} from 'react-native-ui-kitten';

import { Actions } from 'react-native-router-flux';

import FeedCell from './FeedCell';

class FeedsListComponent extends Component {

    constructor() {
        super();
        const Background = '../../../../Design/trees_feed.png';
        
        this.onRowSelection = this.onRowSelection.bind(this);

        const feeds = require('../../../../Data/FeedsList.json');

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            feeds,
            dataSource: ds.cloneWithRows(feeds),
        };
    }

    renderFeed(feed) {
        console.log(feed);
        return (
            <FeedCell 
                item = {feed} 
                onPress = {this.onRowSelection}/>
        );
    }

    onRowSelection(item) {
        console.log(item);
        try {
            Actions.messageBoard();
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        return (
            <View style = {styles.container}>
                <ListView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ margin: 12,}}
                    dataSource={this.state.dataSource}
                    renderRow={ feed => this.renderFeed(feed) }
                />
            </View>
        );
    }
}

export default connect(null, actions)(FeedsListComponent)

const styles = {
    container: {
        flex:1,
    },
    list: {
        flex:1,
    },
};