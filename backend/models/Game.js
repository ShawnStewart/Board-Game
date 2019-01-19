const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const GameSchema = new Schema({
  players: [
    {
      type: ObjectId,
      ref: "players"
    }
  ],
  diceRoll: {
    type: Number,
    default: 0
  },
  properties: [],
  houses: {
    type: Number,
    default: 32
  },
  hotels: {
    type: Number,
    default: 12
  }
});

module.exports = Game = mongoose.model("games", GameSchema);
