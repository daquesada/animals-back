const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    id: {
      trim: true,
      type: String,
      required: [true, "id is required"],
    },
    email: {
      unique: true,
      trim: true,
      type: String,
      required: true,
      validate: [/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, "Write a valid email"],
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      trim: true,
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("users", userSchema);
