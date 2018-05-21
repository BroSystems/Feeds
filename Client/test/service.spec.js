// import request from "supertest";
import { Chance } from "chance";
import { database } from "../src/database";
import {
  authenticateUser,
  registerNewUser
} from '../src/Actions/UserActions';


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
