import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';
import { Image } from 'react-native';
import Images from './Assets/Images';

import FeedsListComponent from './src/Components/Screens/Feeds/FeedsListComponent';
import LoginComponent from './src/Components/Screens/Auth/LoginComponent';
import MessageBoardComponent from './src/Components/Screens/Messages/MessageBoardComponent';

export default DefaultNavigator = () => {
    return (
        <RootStack/>
    );
}


const FeedsStack = createStackNavigator({
    Feeds: FeedsListComponent,
    MessageBoard: MessageBoardComponent
}, {
    initialRouteName: 'Feeds',
});

const TabStack = createBottomTabNavigator({
    MyFeeds: FeedsStack,
    ExploreFeeds: FeedsStack,
},{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        switch (routeName) {
            case 'MyFeeds':
                icon = Images.BarItems[focused ? 'feedsSelected' : 'feeds']();
                break;
            case 'ExploreFeeds':
                icon = Images.BarItems[focused ? 'exploreSelected' : 'explore']();
                break;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Image 
                    source={icon} 
                    style={{height: 25, width: 25}}/>;
      },
    }), tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }, header: null
});

const RootStack = createSwitchNavigator({
    Login: LoginComponent,
    Feeds: {
        screen: TabStack,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'Feeds'
});

// const feedsTabs;

