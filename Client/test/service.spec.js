// import request from "supertest";
import { Chance } from "chance";
import { database } from "../src/database";
import {
  authenticateUser,
  registerNewUser
} from '../src/Actions/UserActions';

describe("must have features", () => {
  it("should not authenticate unknown users", async () => {
    const email = Chance().email();
    const password = validPassword();
    const response = authenticateUser(email, password);
    expect(response.payload).toBe(false);
  });

  it("should authenticate users that registered before if they have correct password", async () => {
    const email = Chance().email();
    const password = validPassword();
    registerNewUser(email, password);
    const response = authenticateUser(email, password);
    expect(response.payload).toBe(true);
  });

  it("should not authenticate users that registered before if they have incorrect password", async () => {
    const email = Chance().email();
    const password = validPassword();
    const notThePassword = validPassword();

    registerNewUser(email, password);
    const response = authenticateUser(email, password);

    expect(response.payload).toBe(false);
  });
});

describe("bonus features", () => {
  it("should not let another user register with same email", async () => {
    const email = Chance().email();
    const password = validPassword();
    const password2 = validPassword();

    registerNewUser(email, password);
    registerNewUser({ email, password2 });
    const isUser1Authenticated = authenticateUser(email, password);
    const isUser2Authenticated = authenticateUser({ email, password2 });

    expect(isUser1Authenticated.payload).toBe(true);
    expect(isUser2Authenticated.payload).toBe(false);
  });

  it("should not let user register if they use invalid email", async () => {
    const email = Chance().string();
    const password = validPassword();

    registerNewUser(email, password);
    const response = authenticateUser(email, password);

    expect(response.payload).toBe(false);
  });

  it("should not let user register if password is not 4-20 characters", async () => {
    const email = Chance().email();
    const password = invalidPassword();

    registerNewUser(email, password);
    const response = authenticateUser(email, password);

    expect(response.payload).toBe(false);
  });
});

afterEach(() => database.empty());

const validPassword = () =>
  Chance().string({ length: Chance().integer({ min: 4, max: 20 }) });
const invalidPassword = () =>
  Chance().string({
    length: Chance().pickone([
      Chance().integer({ min: 0, max: 3 }),
      Chance().integer({ min: 21, max: 1000 })
    ])
  });
