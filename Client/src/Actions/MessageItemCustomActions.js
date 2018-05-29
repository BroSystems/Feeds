
export const LIKE_MESSAGE_OWNER = "LIKE_MESSAGE_OWNER";
export const JOIN_MESSAGE_GROUP = "JOIN_MESSAGE_GROUP";


export const likeMessageOwner = (action) => {
    if (!action) { 
        return undefinedAction;
    }
    let newValue = !action.value;
    action.value = newValue;
    return { action };
};

export const joinMessageGroup = (action) => {
    if(!action) {
        return undefinedAction;
    }
    let newMembersCount = action.value - 1;
    action.value = newMembersCount;
    return { action };
};

const undefinedAction = {
    error: `Action is Undifined`
};