//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text, 
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
export default MessageItem = (props) => {
    if (!props) {
        return <View/>
    }

    const { top, middle, bottom } = props.message.data;

    return (
        <Card key={props.message.id}>
            <MessageUserPart part={ top }/>
            <MessageDataPart data={ middle }/>
            <MessageActionsPart actions={ bottom }/>
        </Card>
    );
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
