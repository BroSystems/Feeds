import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../Actions/FeedsActions';
import {
    View,
    Text,
    FlatList
} from 'react-native';

import {

} from 'react-native-ui-kitten';

class FeedsListComponent extends Component {

    constructor() {
        super();
        this.feeds = [
            {id: 0, name: 'feed 1'},
            {id: 1, name: 'feed 2'},
            {id: 2, name: 'feed 3'},
            {id: 3, name: 'feed 4'},
            {id: 4, name: 'feed 5'},
            {id: 5, name: 'feed 6'},
            {id: 6, name: 'feed 7'}
        ];
    }

    renderFeed(item) {
        console.log(item);
        return (
            <Text 
                key={item.item.id}
                style= {styles.item}>{item.item.name}</Text>
        );
    }


    render() {
        return (
            <View styles = {styles.container}>
                <FlatList
                    data={this.feeds}
                    renderItem={this.renderFeed.bind(this)}
                />
            </View>
        );
    }
}

export default connect(null, actions)(FeedsListComponent)

const styles = {
    container: {
        flex:1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
};