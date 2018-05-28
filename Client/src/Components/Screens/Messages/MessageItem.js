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
export default (props) => {


    const { sender, data, actions } = props.message;
    const messageID = props.message.id;
    return (
        <Card 
            containerStyle={{padding:0}}
            key={props.message.id}>
                <MessageUserPart user={ sender }/>
                <MessageDataPart data={ data }/>
                <MessageActionsPart actions={ actions }/>
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
