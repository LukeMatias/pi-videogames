const { Router } = require("express");
const router = Router();
const {
  fetchApiGamesInit,
  cleanDataFromApi,
  fetchApiGamesName,
  getGamesById,
  getGamesDb,
} = require("../utils/index");

const { Videogame, Genre } = require("../db");

router.get("/", async (req, res) => {
  const { name } = req.query;
  const fetchData = name
    ? await fetchApiGamesName(name)
    : await fetchApiGamesInit();

  try {
    // const games_api = await fetchApiGamesInit()
    const games_api = cleanDataFromApi(fetchData);
    const games_db = await getGamesDb(name);
    let gamesTotal = games_db ? [...games_api, games_db] : games_api;
    
    res
      .status(200)
      .send(gamesTotal.length > 1 ? gamesTotal.flat() : gamesTotal);
    // res.send(gamesTotal);
  } catch (error) {
    res.status(404).send(error);
  }
});
router.post("/", async (req, res) => {
  const { name, description, genresGame, released, platforms, rating } =
    req.body;
  try {
    const newGame = await Videogame.create({
      name,
      description,
      released,
      rating,
      platforms,
    });
    // revveeeerrrrrrrrr
    const genresDb = await Genre.findAll({ where: { name: genresGame } });
    newGame.addGenres(genresDb);
    res.status(200).json(newGame);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const game =
      // REEMPLAZAR POR .INCLUDES() ??
      id.includes("-")
        ? await Videogame.findByPk(id)
        : await getGamesById(id);

    res.status(200).send(game || "game not found");
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
