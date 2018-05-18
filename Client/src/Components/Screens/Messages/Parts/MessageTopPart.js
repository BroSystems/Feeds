//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Text
} from 'react-native-elements';

// create a component
const MessageTopPart = (props) => {
    console.log(props.part);
    const title  = props.part;
    return (
        <View style={ styles.container }>
            <Avatar
                medium
                style={ styles.avatar }
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}/>
            <View style={ styles.labelsStack }>
                <Text style={ styles.text }>{title}</Text>
                <Text style={ styles.text }>{title}</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e3e3e3',
        paddingTop: 4,
        paddingHorizontal: 8,
    },
    text: {
        flex:1,
        padding: 2
    },
    avatar: {
        flex:1,
        borderRadius: 20,
    },
    labelsStack: {
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        padding: 12,
    }
});

//make this component available to the app
export default MessageTopPart;
