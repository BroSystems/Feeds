import React from 'react';
import _ from 'lodash';
import { 
    View, 
    Text,
    Image,
    TouchableHighlight,
    StyleSheet 
} from 'react-native';

import Icons from '../../../../../Assets/images';

// create a component
const MessageActionPart = (props) => {
    const actions = props.actions;
    
    let actionViews = _.map(Object.values(actions), action => {
        const value = action.value;
        const iconName = `${action.icon}${value == true ? 'Selected' : ''}`;
        if (!Icons[iconName]) {
            console.log(`${iconName} Icon Doesnt Exist`);
        }
        return (
            <TouchableHighlight style={styles.actionContainer}>
                <View style={styles.actionContent}>
                    <Image 
                        style={styles.icon}
                        source={Icons[iconName]}
                        resizeMode = 'contain'
                        />
                </View>
            </TouchableHighlight>
        );
    });

    return (
        <View style={styles.container}>
            {actionViews}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 44,
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        backgroundColor: '#2c3e50',
    },
    actionContainer: {
        flex:1,
        paddingHorizontal: 12,
        paddingVertical: 4,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3e3e3',
        height: '100%',
        borderColor: '#c3c3c3',
        borderWidth: 1,
    },
    actionContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        flex: 1,
        left: 0,
        margin:4,
        height: '100%',
    },
});

//make this component available to the app
export default MessageActionPart;
