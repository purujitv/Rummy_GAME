const express = require("express");

const {Auth} = require('../Middlewares/auth.middleware');

const router = express.Router();

const GameControler = require('../Controllers/game.controller');

module.exports = router;

router
    .get('/join/:lobby', Auth, GameControler.joinLobby)
  
    .get('/joincpu/:lobby', Auth, GameControler.joinCpuLobby)
  
    .get('/:lobby/:token', Auth, GameControler.showGameScreen)
    
