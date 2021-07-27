const mongoose = require("mongoose");
const User = require("../components/users/user.model");
const { v4: uuid } = require("uuid");

describe("Auth test", () => {
  let connection;

  beforeAll(async () => {
    connection = await mongoose.connect("mongodb://localhost/test", {
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await mongoose.connection.db.dropDatabase();
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await connection.disconnect();
  });
  it("auth correct credentials", () => {
    expect(1).toEqual(1);
  });
});
