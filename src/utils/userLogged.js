async function checkIsUserLogged(context, userModel) {
  const { email, id } = context;
  if (!id) throw new Error("You must be logged in to perform this action");
  const user = await userModel.findOne({ email });
  if (!user) throw new Error("User does not exist");
  return user;
}

module.exports = checkIsUserLogged;
