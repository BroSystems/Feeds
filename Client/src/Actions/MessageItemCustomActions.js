
export const LIKE_MESSAGE_OWNER = "LIKE_MESSAGE_OWNER";
export const JOIN_MESSAGE_GROUP = "JOIN_MESSAGE_GROUP";


export const likeMessageOwner = (action) => {
    if (!action) { 
        return undefinedActionError;
    }
    let newValue = !action.value;
    action.value = newValue;
    return { action };
};

export const joinMessageGroup = (action) => {
    if(!action) {
        return undefinedActionError;
    }
    let newMembersCount = action.value - 1;
    action.value = newMembersCount;
    return { action };
};

const undefinedActionError = {
    error: `Action is Undifined`
};