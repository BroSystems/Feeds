import React, { Component } from 'react';
import {  
    View, 
    Text, 
} from 'react-native';

export default class ListTestingComponent extends Component {
  render() {
    return (
      <View style={ styles.contentView }>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = {
    contentView: {
        flex: 1,
        backgroundColor:'#e3e3e3'
    }
};