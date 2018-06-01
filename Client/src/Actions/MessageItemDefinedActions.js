/* Action Resolver */
export default resolveActionForType = (type) => {
    switch (type) {
        case LIKE_MESSAGE_OWNER:
            return likeMessageOwner;
        case JOIN_MESSAGE_GROUP:
            return joinMessageGroup;
        default: 
            return undefinedActionError;
    }
};  

/* Defined Errors */
const undefinedActionError = () => {
    return {
        error: `Action is Undifined`
    };
};

/* Defined Types */
const LIKE_MESSAGE_OWNER = "LIKE_MESSAGE_OWNER";
const JOIN_MESSAGE_GROUP = "JOIN_MESSAGE_GROUP";

/* Defined Actions */
const likeMessageOwner = (message) => {
    console.log('Like Message Owner Action Performed');
    const likeAction = message.actions.like;
    likeAction.value = !likeAction.value;
    return { updatedMessage: message };
};

const joinMessageGroup = (message) => {
    console.log('Join/Leave Message Group Action Performed');
    // Changed Joined Status
    const joinAction = message.actions.join;
    console.log(`Old Join Value is - ${joinAction.value}`);
    joinAction.value = !joinAction.value;
    console.log(`New Join Value is - ${joinAction.value}`);
    // Changed Group Count
    const messageGroup = message.data.group;
    messageGroup.value += joinAction.value == true ? (-1) : 1;
    return { updatedMessage: message };
};