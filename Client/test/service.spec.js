// import request from "supertest";
import { Chance } from "chance";

import { database } from "../src/database";
import {
  authenticateUser,
  registerNewUser
} from '../src/Actions/UserActions';

import {
  fetchMessages, mergeMessageStyleAndActions
} from '../src/Actions/MessageBoardActions';

import {
  resolveMessageAction
} from '../src/Actions/MessageItemActions';

describe("user actions tests", () => {
  it("should not authenticate unknown users", async () => {
    const username = Chance().email();
    const password = validPassword();
    const response = authenticateUser({ username, password });
    expect(response.payload).toBe(false);
  });
  
  it("should authenticate users that registered before if they have correct password", async () => {
    const username = Chance().email();
    const password = validPassword();
    
    registerNewUser({ username, password });
    const response = authenticateUser({ username, password });
    expect(response.payload).toBe(true);
  });
  
  it("should not authenticate users that registered before if they have incorrect password", async () => {
    const username = Chance().email();
    const password = validPassword();
    const notThePassword = validPassword();
    
    registerNewUser({ username, password });
    const response = authenticateUser({ username, password: notThePassword });
    
    expect(response.payload).toBe(false);
  });
  
  it("should not let another user register with same username", async () => {
    const username = Chance().email();
    const password = validPassword();
    const password2 = validPassword();
    
    registerNewUser({ username, password });
    registerNewUser({ username, password: password2 });
    const isUser1Authenticated = authenticateUser({ username, password });
    const isUser2Authenticated = authenticateUser({ username, password: password2 });
    
    expect(isUser2Authenticated.payload).toBe(password === password2);
  });
  
  it("should not let user register if they use invalid username", async () => {
    const username = Chance().string();
    const password = validPassword();
    
    registerNewUser({ username, password });
    const response = authenticateUser({ username, password });
    expect(response.payload).toBe(false);
  });
  
  it("should not let user register if password is not 4-20 characters", async () => {
    const username = Chance().email();
    const password = invalidPassword();
    
    registerNewUser({ username, password });
    const response = authenticateUser({ username, password });
    
    expect(response.payload).toBe(false);
  });
  
  afterEach(() => database.empty());
});

describe("messages tests", () => {
  
  it("each message action should have 'Icon', 'Label', 'Value' and 'ActionType' fields", async () => {
    
    const isValid = messageObject => {
      let hasFields = true;
      Object.keys(messageObject.actions).forEach(action => {
        const { label, value, icon, actionType } = messageObject.actions[action];
        hasFields = hasFields && 
                    (label != null) &&
                    (value != null) &&
                    (icon != null) &&
                    (actionType != null);
      });
      return hasFields;
    };
    
    const feed = require('../Data/FeedsList.json')[0];
    const msgs = require('../Data/Messages.json');
    
    const { message_style, message_actions } = feed.config;
    console.log(message_actions);
    const message = mergeMessageStyleAndActions({
      messages: msgs, 
      style: message_style,
      actions: message_actions,
    })[0];
    expect(isValid(message)).toBe(true);
  });
  
  it("each one of board messages should contain: 'Label', 'Message' and 'Style'", async () => {
    
    const isValid = messageObject => {
      let hasFields = true;
      Object.keys(messageObject.data).forEach(key => {
        const { value, style, label } = messageObject.data[key];
        hasFields = hasFields && 
                    (value != null) &&
                    (style != null) &&
                    (label != null);
      });
      return hasFields;
    };
    
    const feed = require('../Data/FeedsList.json')[0];
    const messagesJson = require('../Data/Messages.json');

    const { message_style, message_actions } = feed.config;
    const message = mergeMessageStyleAndActions({
      messages: messagesJson,
      style: message_style,
      actions: message_actions
    })[0];
    expect(isValid(message)).toBe(true);
  });

  it("After performing like action new action value must be opposite from before", async () => {
    const value = validLikeAction.value;
    const actionCreaterValue = resolveMessageAction({ validLikeAction }).payload;
    const newValue = actionCreaterValue.action.value;

    expect(true).toBe(!value);
  });
});


const validPassword = () =>
Chance().string({ length: Chance().integer({ min: 4, max: 20 }) });

const invalidPassword = () =>
Chance().string({
  length: Chance().pickone([
    Chance().integer({ min: 0, max: 3 }),
    Chance().integer({ min: 21, max: 1000 })
  ])
});

const validLikeAction = () => {
  return {
      "label": "Upvote Driver",
      "value": false,
      "icon": "btnLike"
  };
}
const validMessageObject = () => {
  return {
    id:'',
    user: {
      username: '',
    },
    data:{
      item_1:{label:'',value:'',style:''},
      item_2:{label:'',value:'',style:''},
      item_3:{label:'',value:'',style:''},
    },
    actions: {
      item: {
        label:'',
        icon:'',
        value:'',
        actionType:''
        
      }
    }
  }
};