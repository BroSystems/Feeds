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
    MessageTopPart
} from './Parts';

// create a component
export default MessageItem = (props) => {
    console.log('MessageItem - ' + JSON.stringify(props,null,2));

    if (!props) {
        return <View/>
    }

    const { top, middle, bottom } = props.message;

    return (
        <Card>
            <MessageTopPart part={ top }/>
            <View style={styles.container}>
                <Text>{middle}</Text>
            </View>
            <View style={styles.container}>
                <Text>{bottom}</Text>
            </View>
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
