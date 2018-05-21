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
        this.onRowSelection = this.onRowSelection.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    componentWillMount() {
        this.props.getFeedList(0);
    }

    renderFeed(feed) {
        return (
            <FeedCell 
                item = {feed} 
                onPress = {this.onRowSelection}/>
        );
    }

    onRowSelection(item) {
        try {
            Actions.messageBoard(item);
        } catch(error) {
            console.log(error);
        }
    }

    renderContent = () => {
        if (!this.props.feeds || this.props.feeds.length <= 0 || !this.props.dataSource) {
            return (
                <Text style={{ textAlign:'center' }}>No Feeds To Present</Text>
            );
        } else {
            return (
                <ListView
                        style={styles.list}
                        contentContainerStyle={{ margin: 12,}}
                        dataSource={this.props.dataSource}
                        renderRow={ feed => this.renderFeed(feed) }
                />
            );
        }
    }

    render() {
        
        return (
            <View style = {styles.container}>
                {this.renderContent()}
            </View>
        );
    }
}

const mapStateToProps = ({ feedsReducer }) => {
    const { feeds, pageNumber, error, didLoad } = feedsReducer;

    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
        feeds,
        dataSource: ds.cloneWithRows(feeds),
    }
}

export default connect(mapStateToProps, actions)(FeedsListComponent)

const styles = {
    container: {
        flex:1,
    },
    list: {
        flex:1,
    },
};