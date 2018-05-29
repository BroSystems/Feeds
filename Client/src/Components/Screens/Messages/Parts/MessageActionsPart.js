import React from 'react';
import { 
    View, 
    Text,
    Image,
    TouchableOpacity,
    StyleSheet 
} from 'react-native';

import Icons from '../../../../../Assets/Images';

// create a component
export default (props) => {
    const { actions, actionHandler } = props;       
    console.log(`action handler - ${actionHandler}`);
    return (
        <View 
            style={styles.container}>
        { Object.values(actions).map(action => renderAction(action, actionHandler)) }
        </View>
    );
}

const renderAction = (action, handler) => {
    // console.log(handler);
    const value = action.value;
    const iconName = `${action.icon}${value == true ? 'Selected' : ''}`;
    const icon = Icons.Actions[iconName]();
    
    if (!icon) {
        console.log(`${iconName} Icon Doesnt Exist`);
    }
    return (
        <TouchableOpacity
            key={ action.label } 
            style={ styles.actionContainer }
            onPress={ () => handler(action) }>
            <View style={ styles.actionContent }>
                <Image
                    style={ styles.icon }
                    source={ icon }
                    resizeMode = 'contain'/>
            </View>
        </TouchableOpacity>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 44,
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        backgroundColor: 'transparent',
        borderTopColor: '#c3c3c3',
        borderTopWidth: 1,
    },
    actionContainer: {
        flex:1,
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
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