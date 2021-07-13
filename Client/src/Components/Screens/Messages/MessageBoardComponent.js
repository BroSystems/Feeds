import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../Actions/MessageBoardActions';
import {
    View,
    Text,
    ListView,
} from 'react-native';

import MessageItem from './MessageItem';
import FeedCell from '../Feeds/FeedCell';


class MessageBoardComponent extends Component {
    constructor() {
        super();
        this.renderMessage = this.renderMessage.bind(this);
        this.renderList = this.renderList.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.actionHandler = this.actionHandler.bind(this);
    }

    componentWillMount() {
        const feed = this.props.navigation.getParam('feed',{});
        
        const { messages, error, fetchMessages } = this.props;
        const params = {
            page: messages.page,
            feed,
            userId: ''
        };
        fetchMessages(params);
    }
    
    renderList() {
        if (!this.props.messages.data || this.props.messages.data.length <= 0) {
            if (!this.props.error) {
                <Text style={{ textAlign:'center' }}>No Messages To Present</Text>
            } else {
                return (
                    <Text style={{ textAlign:'center' }}>{this.props.error}</Text>
                );
            }
        } else {
            return (
                <ListView
                    dataSource={ this.props.dataSource }
                    renderRow={ this.renderMessage }
                    renderHeader = { this.renderHeader }
                />
            );
        }
    }

    renderHeader() {
        return (
            <FeedCell
                isHeader
                item={ this.props.feed }/>
        );
    }

    actionHandler(actionType, message) {
        console.log(`Pressed Action Of Type - ${actionType}`);
        const { resolveMessageAction } = this.props;
        if (!resolveMessageAction || !message) {
            console.log('Action Or Message Undefined');
            return;
        }
        resolveMessageAction({
            actionType,
            message
        });
    }

    renderMessage(message) {
        return (
            <MessageItem 
                key={message.id}
                style = { this.props.feed }
                message={ message }
                actionHandler={ this.actionHandler }
            /> 
        );
    }

    render() {
        return (
            <View style={ styles.container }>
                {this.renderList()}
            </View>
        );
    }
}

const mapStateToProps = ({ board }) => {
    const { messages, feed, error } = board;
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
        messages,
        feed,
        error,
        dataSource: ds.cloneWithRows(messages.data)
    };
}

export default connect(mapStateToProps, actions)(MessageBoardComponent);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
};