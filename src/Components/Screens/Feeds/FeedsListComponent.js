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


import Background from '../../../../Design/trees_feed.png';

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
            <View 
                key={item.item.id}
                style={styles.item}>
                <ImageBackground 
                    style ={styles.image} 
                    source={Background}
                    resizeMode="stretch">
                        <View style={styles.topTitles}>
                            <Text style={styles.category}>FEED CATEGORY</Text>
                            <Text style={styles.title}>{item.item.name}</Text>
                        </View>
                        <View style={styles.bottomTitles}>
                            <Text style={styles.subtitle}>
                                Inside the extraordinary world of Monument Valley 2
                            </Text>
                        </View>
                </ImageBackground>
            </View>
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
        width: '90%'
    },
    item: {
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        shadowOffset: {width: 0,height: 12},
        shadowOpacity: 0.16,
        shadowColor: '#000000',
        shadowRadius: 12,

    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'relative',
        minHeight: 350,
        borderRadius: 12,
        borderWidth:1,
        borderColor: 'transparent',
        overflow: 'hidden',
    },
    topTitles: {
        top:0,
        margin: 24,
    },
    bottomTitles: {
        bottom: 0,
        position: 'absolute',
        width: '100%',
        padding: 24
    },
    category: {
        backgroundColor: 'transparent',
        fontSize: 15,
        fontWeight: 'normal',
        color: '#111111',
        textAlign: 'left',
        width: '100%'
    },
    title: {
        backgroundColor: 'transparent',
        fontSize: 28,
        fontWeight: 'normal',
        color: '#111111',
        textAlign: 'left',
        width: '100%'
    },
    subtitle: {
        backgroundColor: 'transparent',
        fontSize: 16,
        fontWeight: 'normal',
        color: '#111111',
        textAlign: 'left',
        width: '100%',
    }
};