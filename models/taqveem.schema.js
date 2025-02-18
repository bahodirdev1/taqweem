const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taqveemSchema = new Schema(
  {
    serial: {
      type: Number,
      required: true,
      unique: true
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    shortDate: {
      type: String,
      required: true,
      trim: true,
    },
    day: {
      type: String,
      required: true,
      trim: true,
    },
    sehri: {
      type: String,
      required: true,
      trim: true,
    },
    fajar: {
      type: String,
      required: true,
      trim: true,
    },
    ifter: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const taqveem = model('taqveem', taqveemSchema);

module.exports = {
  taqveem,
};
