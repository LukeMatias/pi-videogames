const { Router } = require("express");
const axios = require("axios");
const router = Router();
const { getGames, getGamesByName,getGamesById } = require("../utils/index");

const { Videogames, Genre, Op } = require("../db");

router.get("/", async (req, res) => {
  const { name } = req.query;
  const condition = name ? { where: { name: { [Op.substring]: name } } } : {};

  try {
    // DEBERÍA SACAR LOS AWAIT YA QUE ESTA EL PROMISE ALL ????
    const games_api = name ? await getGamesByName(name) : await getGames();

    const games_db = await Videogames.findAll(condition);

    let gamesTotal = await Promise.all([games_api, games_db]);

    res.send(gamesTotal.flat());
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  const { name, description,genres, released, platforms, rating } = req.body;
  try {
    const newGame = await Videogames.create({
      name,
      genres,
      description,
      released,
      rating,
      platforms,
    });
    res.send(newGame);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  // if (typeOf id === ) {
    
  // }
  const game = await Videogames.findByPk(id);
  res.json(game || "game not found");
});

module.exports = router;
