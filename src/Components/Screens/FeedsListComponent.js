import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Actions/FeedsActions';
import {
    View,
    Text
} from 'react-native';

import {

} from 'react-native-ui-kitten';

class FeedsListComponent extends Component {
    render() {
        return (
            <View>
                <Text>FeedsComponent</Text>
            </View>
        );
    }
}

export default connect(null, actions)(FeedsListComponent)