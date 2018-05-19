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
    if (!props) {
        return <View/>
    }

    const { top, middle, bottom } = props.message.data;

    return (
        <Card>
            <MessageTopPart part={ top }/>
            <View style={styles.container}>
                <Text>Empty</Text>
            </View>
            <View style={styles.container}>
                <Text>Bottom</Text>
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
