const router = require("express").Router();

// Models
const Game = require("../../../models/Game");
const properties = require("../../../models/Property");

// @route   GET api/test/game-creation
// @desc    Tests Game document creation
// @access  Public
router.get("/game-creation", (req, res) => {
  new Game({ properties })
    .save()
    .then(game => res.json(game))
    .catch(err => console.log(err));
});

module.exports = router;
