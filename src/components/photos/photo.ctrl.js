const { v4: uuid } = require("uuid");
const photo = require("./photo.model");

module.exports = (injectedDB) => {
  const getPhotos = () =>
    injectedDB
      .getAll(photo)
      .then((data) => data)
      .catch(() => {
        throw new Error("Internal Error");
      });

  const createPhoto = (_, { input }) => {
    input.id = uuid();

    return injectedDB
      .insertOne(new photo(input))
      .then((data) => data)
      .catch(() => {
        throw new Error("Internal Error");
      });
  };

  const updatePhoto = (_, { input }) => {
    return injectedDB
      .findOneAndUpdate({
        schema: photo,
        payload: input.find,
        update: input.update,
      })
      .then((data) => data)
      .catch(() => {
        throw new Error("Internal Error");
      });
  };
  return {
    Query: { getPhotos },
    Mutation: { createPhoto, updatePhoto },
  };
};
