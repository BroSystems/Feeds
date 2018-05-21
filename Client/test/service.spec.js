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

    expect(isUser1Authenticated.payload).toBe(true);
    expect(isUser2Authenticated.payload).toBe(password == password2);
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

describe("messages actions tests", () => {

  it("each message action should have 'Icon', 'Label', 'Value' and 'ActionType' fields", async () => {
    const feed = require('../Data/FeedsList.json')[0];
    const msgs = require('../Data/Messages.json');

    const { message_actions } = feed.config;
    const message = mergeMessageStyleAndActions({
      messages: msgs, 
      actions: message_actions})[0];
    
    let hasFields = true;

    Object.keys(message.data.bottom).forEach(item => {
      hasFields = hasFields && (!item.label) && (!item.value) && (!item.icon) && (!item.actionType);
    });

    expect(hasFields).toBe(true);
  });

  it("each one of board item message properties should contain: 'Value' and 'Style'", async () => {
    const feed = require('../Data/FeedsList.json')[0];
    const messages = require('../Data/Messages.json');
    const { message_style } = feed.config;

    const message = mergeMessageStyleAndActions({
      messages,
      style: message_style
    })[0];
    
    let hasFields = true;

    Object.keys(message.data.middle.message).forEach(item => {
      hasFields = hasFields && (!item.value) && (!item.style);
    });

    expect(hasFields).toBe(true);
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
