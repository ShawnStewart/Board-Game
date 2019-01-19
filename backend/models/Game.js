const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const GameSchema = new Schema({
  players: [
    {
      player: {
        type: ObjectId,
        ref: "players"
      },
      cash: {
        type: Number,
        default: 1500
      }
    }
  ],
  tiles: [],
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
