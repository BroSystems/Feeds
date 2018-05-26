import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../Actions/FeedsActions';
import {
    View,
    Text,
    ListView,
    ImageBackground,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

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
            this.props.navigation.navigate('MessageBoard', { feed: item });
        } catch(error) {
            console.log(error);
        }
    }
    
    renderContent = () => {
        
        const { isLoading = false, error, feeds, dataSource } = this.props;
        
        if (isLoading) {
            return (<ActivityIndicator animating={true}/>)
        } else if (error != null) {
            return (<Text>{error}</Text>)
        } else if (!feeds || feeds.length <= 0 || !dataSource) {
            return (
                <Text style={{ textAlign:'center' }}>No Feeds To Present</Text>
            );
        } else {
            return (
                <ListView
                style={styles.list}
                contentContainerStyle={{ margin: 12,}}
                dataSource={dataSource}
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
    const { feeds, isLoading, error } = feedsReducer;
    
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
        return {
            dataSource: ds.cloneWithRows(feeds),
            feeds,
            error,
            isLoading
        }
}

export default connect(mapStateToProps, actions)(FeedsListComponent)

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
    },
    list: {
        flex:1,
    },
});