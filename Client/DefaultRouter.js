import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import FeedsListComponent from './src/Components/Screens/Feeds/FeedsListComponent';
import LoginComponent from './src/Components/Screens/Auth/LoginComponent';
import MessageListComponent from './src/Components/Screens/Messages/MessageListComponent';

export default DefaultNavigator = () => {
    return (
        //First Main Scene is with one sub scene
        <Router>
            <Scene key='root'>
                <Scene
                    key='login'
                    component={LoginComponent}
                    title='Login'
                    />
                <Scene
                    key='feedsList'
                    component={FeedsListComponent}
                    title='Feeds'
                    initial/>
                <Scene
                    key='messageBoard'
                    component={ MessageListComponent }
                    title='Messages'
                    />    
                </Scene>
        </Router>
    );
}
