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
    const { item, onPress, style, isHeader = false} = props;

    if (!item) {
        return (
            <View>
                <Text>Item is Undefined</Text>
            </View>
        )
    }
    return (
        <TouchableWithoutFeedback
            style = {[style, isHeader ? styles.header : styles.item]}
            onPress={event => onPress(item)}>
            <ImageBackground 
                style ={styles.image} 
                source={Background}
                resizeMode="stretch">
                    <View style={styles.topTitles}>
                        <Text style={styles.category}>FEED CATEGORY</Text>
                        <Text style={styles.title}>{item.name}</Text>
                    </View>
                    <View style={styles.bottomTitles}>
                        <Text style={styles.subtitle}>
                            Inside the extraordinary world of Monument Valley 2
                        </Text>
                    </View>
                    <View style={{ height: 8 }}/>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
};

const styles = {
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowOpacity: 0.16,
        shadowColor: '#000000',
        shadowRadius: 12,
        marginBottom: 8,
    },
    image: {
        aspectRatio: 1,
        position: 'relative',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'transparent',
        overflow: 'hidden',
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