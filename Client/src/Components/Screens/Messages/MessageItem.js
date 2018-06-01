//import liraries
import React, { Component } from 'react';

import { 
    View, 
    Text,
    Alert, 
    StyleSheet 
} from 'react-native';
import {
    Card
} from 'react-native-elements';
import {
    MessageUserPart,
    MessageActionsPart
} from './Parts';
import MessageDataPart from './Parts/MessageDataPart';

// create a component
export default (props) => {
    
    // Wrapper around ActionHandler passed from MessageBoardComponent
    // Passed Function accepts message and actionType while MessageActionsPart
    // Doesnt know who Message is.
    // So a wrapper function that returns a function that accepts only actionType
    // is needed
    const messageItemActionHandler = (actionHandler, message) => {
        return (actionType) => {
            console.log(actionType);
            return actionHandler(actionType,message);
        };
    };

    // Function to Render The MessageItem
    const renderMessageParts = (message, handler) => {
        const { sender, data, actions } = message;
        const messageID = message.id;
        return (
            <Card containerStyle={{padding:0}} key={messageID}>
                <MessageUserPart user={ sender }/>
                <MessageDataPart data={ data }/>
                <MessageActionsPart actions={ actions } actionHandler={ messageItemActionHandler(handler, message) }/>
            </Card>
        );
    };

    const { error, message, actionHandler } = props;
    if(error) {
        Alert.alert(
            'Error',
            error, 
            [{
                text: 'OK',
                onPress: () => console.log('OK Pressed')
            }], {
                cancelable: false
            }
        );
    } 
    if (message) {
        return renderMessageParts(message, actionHandler);
    } else {
        return renderEmptyMessage();
    }
};

// define your styles
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
};
