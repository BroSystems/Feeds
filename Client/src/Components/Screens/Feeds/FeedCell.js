import React from 'react';

import Background from '../../../../Design/trees_feed.png';

import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

export default FeedCell = (props) => {
    const { item, onPress = () => {}, style = {}, isHeader = false} = props;

    if (!item) {
        return (
            <View/>
        )
    }
    return (
        <View style={[style, isHeader ? styles.header : styles.item]}>
        <TouchableWithoutFeedback
            style = {{flex:1}}
            onPress={event => onPress(item)}>
            <ImageBackground 
                style ={styles.image} 
                source={{uri: item.image}}
                resizeMode="stretch">
                <View style={styles.topTitles}>
                    <Text style={styles.category}>{item.category}</Text>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View style={styles.bottomTitles}>
                    <Text style={styles.subtitle}>
                       {item.description}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
        </View>
    );
};

const styles = {
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        aspectRatio: 2
    },
    item: {
        flex: 1,
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowOpacity: 0.24,
        shadowColor: '#000000',
        shadowRadius: 8,
        aspectRatio: 1,
        marginBottom: 12
    },
    image: {
        flex:1,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'transparent',
        overflow: 'hidden',
        width: '100%',
    },
    topTitles: {
        top: 0,
        margin: 24,
    },
    bottomTitles: {
        bottom: 0,
        position: 'absolute',
        width: '100%',
        padding: 24
    },
    category: {
        backgroundColor: 'transparent',
        fontSize: 15,
        fontWeight: 'normal',
        color: '#111111',
        textAlign: 'left',
        width: '100%'
    },
    title: {
        backgroundColor: 'transparent',
        fontSize: 28,
        fontWeight: 'normal',
        color: '#111111',
        textAlign: 'left',
        width: '100%'
    },
    subtitle: {
        backgroundColor: 'transparent',
        fontSize: 16,
        fontWeight: 'normal',
        color: '#111111',
        textAlign: 'left',
        width: '100%',
    }
};