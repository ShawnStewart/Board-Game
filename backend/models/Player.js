const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const PlayerSchema = new Schema({
  name: String,
  cash: {
    type: Number,
    default: 1500
  }
});

module.exports = Player = mongoose.model("players", PlayerSchema);
