//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet 
} from 'react-native';
import {
    Avatar,
} from 'react-native-elements';

// create a component
const MessageUserPart = (props) => {
    const { user } = props;
    // console.log(user);
    return (
        <View style={ styles.container }>
            <Avatar
                medium
                rounded
                style={ styles.avatar }
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                source={{ uri: user.picture_url }}/>
            <View style={ styles.labelsStack }>
                <Text style={ styles.text }>{user.username}</Text>
                <Text style={ styles.text }>{user.rank}</Text>
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
export default MessageUserPart;
