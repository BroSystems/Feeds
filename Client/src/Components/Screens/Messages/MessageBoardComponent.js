import React, { Component } from 'react';
import { connect } from 'react-redux';

import MessageItem from './MessageItem';

import {
    View,
    Text,
    ListView,
} from 'react-native';

// import FeedCell from '../Feeds/FeedCell';

export default class MessageBoardComponent extends Component {

    constructor() {
        super();
        this.renderMessage = this.renderMessage.bind(this);
        /*
        |top
        |---user
        |------username
        |------rank
        |middle
        |---message
        |------data
        |---------Detail1
        |------------element: Text 
        |------------value: 'hello' 
        |---------Detail2
        |------------element: Text 
        |------------value: 'world' 
        |---------Image
        |------------element: Image
        |------------value: 'link to the image' 
        |---------Description
        |------------element: Text
        |------------value: 'product description'
        |------style
        |------------Detail1: style
        |------------Detail2: style
        |------------Image: style
        |------------Description: style
        |bottom
        |---actions
        |------labels
        |---------UpVote
        |------------label: '', 
        |------------icon:''
        */

        const messages = {
            0: { top: {
                username: 'username 1',
                userRank: 'member'
            }, middle: {
                message: {
                    details:[], 
                    description:'' 
                }
            }, bottom: {
                
            }},
        };
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            messages,
            dataSource: ds.cloneWithRows(messages),
        };
    }

    renderMessage(message) {
        return ( 
            <MessageItem 
                message={ message }
            /> 
        );
    }

    render() {
        return (
            <View style={ styles.container }>
                <ListView
                    dataSource={ this.state.dataSource }
                    renderRow={ this.renderMessage }
                />
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