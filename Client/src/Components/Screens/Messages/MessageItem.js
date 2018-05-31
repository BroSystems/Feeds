//import liraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as messageActions from '../../../Actions/MessageItemActions';
import { 
    View, 
    Text,
    Alert, 
    StyleSheet 
} from 'react-native';
import {
    Card
} from 'react-native-elements';
import {
    MessageUserPart,
    MessageActionsPart
} from './Parts';
import MessageDataPart from './Parts/MessageDataPart';

// create a component
class MessageItem extends Component {

    constructor(props) {
        super(props);
        this.renderMessageParts = this.renderMessageParts.bind(this);
        this.actionHandler = this.actionHandler.bind(this);
    }

    actionHandler(action) {
        console.log(`Pressed Action Of Type - ${action}`);
        const { message, resolveMessageAction } = this.props;
        if (!resolveMessageAction || !message) {
            console.log('Action Or Message Undefined');
            return;
        }
        resolveMessageAction({ action, message });
        // action();
    }

    // Temporary - Doesnt need to render empty message item :|
    renderEmptyMessage() {
        return (
            <Text>Empty Message</Text>
        );
    }

    renderMessageParts(message) {
        const { sender, data, actions } = message;
        const messageID = message.id;
        return (
            <Card 
                containerStyle={{padding:0}}
                key={messageID}>
                    <MessageUserPart user={ sender }/>
                    <MessageDataPart data={ data }/>
                    <MessageActionsPart 
                        actions={ actions }
                        actionHandler={ this.actionHandler }/ >
            </Card>
        );
    }

    render() {
        if(this.props.error) {
            Alert.alert(
                'Error',
                this.props.error, 
                [{
                        text: 'OK',
                        onPress: () => console.log('OK Pressed')
                }], {
                    cancelable: false
                }
            );
        } 
        if (this.props.message) {
            return this.renderMessageParts(this.props.message);
        } else {
            return this.renderEmptyMessage();
        }
    }
}

const mapStateToProps = ({ messageReducer }, { message }) => {
    const { updatedAction } = messageReducer;
    if (updatedAction) {
        console.log(`Action ${updatedAction.label} was updated with new value of - ${updatedAction.value}`);
    }

    return {
        message
    }
}

export default connect(mapStateToProps, messageActions)(MessageItem);

// define your styles
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
};
