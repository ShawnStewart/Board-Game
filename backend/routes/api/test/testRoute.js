const router = require("express").Router();

// Models
const Game = require("../../../models/Game");
const Player = require("../../../models/Player");
const properties = require("../../../models/Property");

// @route   GET api/test/game-creation
// @desc    Tests Game document creation
// @access  Public
router.get("/game-creation", (req, res) => {
  const players = [
    "5c43a80c7e424043ccd49a98",
    "5c43a80c7e424043ccd49a9a",
    "5c43a80c7e424043ccd49a99",
    "5c43a80c7e424043ccd49a9b"
  ];

  new Game({ properties })
    .save()
    .then(game => {
      players.forEach(player => {
        game.players.push(player);
      });
      res.status(201).json(game);
    })
    .catch(err => console.log(err));
});

// @route   GET api/test/player-creation
// @desc    Creates some static players
// @access  Public
router.get("/player-creation", (req, res) => {
  const names = ["Shawn", "Alec", "Jake", "Walker"];
  let results = [];

  names.forEach((name, i) => {
    new Player({ name })
      .save()
      .then(player => {
        results.push(player._id);
        if (i === 3) {
          res.status(201).json({ success: results });
        }
      })
      .catch(err => console.log(err));
  });
});

module.exports = router;
