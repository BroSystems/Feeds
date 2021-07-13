//import liraries
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';

import {
    Badge
} from 'react-native-elements';

// create a component
const MessageDataPart = (props) => {
    const { data } = props;
    return (
        <View 
            style={styles.container}>
        {
            Object.keys(data).map(item => {
                const { value, label, style } = data[item];
                switch (label) {
                    case 'description':
                        return renderDescription({ label, value });
                    default: 
                        return renderBadgeForItem({ label, value });
                }    
            })
        }
        </View>
    );
};

const renderBadgeForItem = ({ label, value }) => {
    return (
        <Badge 
            key={label}
            containerStyle={styles.badge}
            value={`${label} - ${value}`}/>
    );
};

const renderDescription = ({ label, value }) => {
    return (
        <Text key= {label} style = {styles.description}>{value}</Text>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    badge: {
        margin: 4,
        backgroundColor: 'tomato'
    },
    description: {
        padding: 4,
    }
});

//make this component available to the app
export default MessageDataPart;
