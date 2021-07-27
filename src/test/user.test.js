const mongoose = require("mongoose");
const User = require("../components/users/user.model");
const { v4: uuid } = require("uuid");

describe("User test", () => {
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

  it("create a user", async () => {
    const mockUser = new User({
      id: uuid(),
      email: "correo@fake.com",
      password: "hola123",
      avatar: "goku",
    });

    const res = await mockUser.save().catch((e) => e);
    expect(mockUser).toEqual(res);
  });

  it("create a user with bad email", async () => {
    const mockUser = new User({
      id: uuid(),
      email: "correo@",
      password: "hola123",
      avatar: "goku",
    });

    const res = await mockUser.save().catch((e) => e);
    expect(mockUser).not.toEqual(res);
  });

  it("create a dupllicated user", async () => {
    const mockUser = new User({
      id: uuid(),
      email: "correo@dominio.com",
      password: "hola123",
      avatar: "goku",
    });
    const res = await mockUser.save().catch((e) => e);

    const mockUser2 = new User({
      id: uuid(),
      email: "correo@dominio.com",
      password: "hola123",
      avatar: "goku",
    });

    const res2 = await mockUser2.save().catch((e) => e);

    expect(res).not.toEqual(res2);
  });

  it("create a empty user", async () => {
    const mockUser = new User();
    const res = await mockUser.save().catch((e) => e);
    expect(mockUser).not.toEqual(res);
  });
});
