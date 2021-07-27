const Users = [
  { id: 1, name: "José" },
  { id: 2, name: "Pedro" },
  { id: 3, name: "Juana" },
];

const getAll = () => {
  return new Promise((resolve, reject) => {
    if (Users.length == 0) {
      reject("There are not users");
    }
    resolve(Users);
  });
};

const insertOne = (input) => {
  return new Promise((resolve, reject) => {
    if (!input) {
      reject("There is not input");
    }
    Users.push(input);
    resolve(input);
  });
};

const deleteOne = (id) =>
  new Promise((resolve, reject) => {
    if (!id) {
      reject("There is not input");
    }
    Users.forEach((u, index) => {
      if (u.id == id) {
        Users.splice(index, 1);
        resolve({ id: u.id, name: u.name });
      }
    });
    // reject("Not Exist");
    resolve(null);
  });

module.exports = {
  getAll,
  insertOne,
  deleteOne,
};
