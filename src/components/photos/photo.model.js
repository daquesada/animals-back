const { Schema, model } = require("mongoose");

const photoSchema = new Schema(
  {
    id: {
      required: true,
      type: String,
      unique: true,
    },
    categoryId: {
      type: String,
      trim: true,
    },
    src: {
      type: String,
      trim: true,
      unique: true,
    },
    userId: {
      type: String,
      trim: true,
    },
    likes: {
      type: Number,
      min: [0, "it must be higher than zero"],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("photos", photoSchema);
