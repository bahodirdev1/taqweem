const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DuaSchema = new Schema(
  {
    serial: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    arabic_doa: { type: String, required: true },
    transliteration: { type: String, required: true },
    translate: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const duaModel = model("Dua", DuaSchema);

module.exports = {
  duaModel,
};
