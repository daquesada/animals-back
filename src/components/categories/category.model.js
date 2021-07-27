const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    id: { required: true, type: String, trim: true },
    name: { required: true, type: String, trim: true },
    emoji: { required: true, type: String, trim: true },
    cover: { required: true, type: String, trim: true },
    path: { required: true, type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = model("categories", userSchema);
