const { Router } = require("express");
const router = Router();
const {
  cleanDataFromApi,
  fetchApiGamesName,
  getGamesById,
  getGamesDb,
  arrayPromises,
} = require("../utils/index");

const { Videogame, Genre } = require("../db");

router.get("/", async (req, res) => {
  const { name } = req.query;
  let games = null;
  const fnGetFromDb = await getGamesDb(name);
  const games_db = fnGetFromDb;

  if (name) {
    fetchApiGamesName(name)
      .then((data) => {
        games = cleanDataFromApi(data.slice(0, 15));
        // console.log(games)
        res.send([games, games_db].flat());

        return games;
      })
      .catch((err) => res.status(404).send(err, "Juago no encontrado"));
  } else {
    Promise.allSettled(arrayPromises)
      .then((...allValues) => {
        games = allValues[0].map((el) => {
          return cleanDataFromApi(el.value);
        });
        res.send([games.flat(), games_db].flat());
      })
      .catch((err) => res.status(404).send(err, "Juego no encontrado"));
  }
});
router.post("/", async (req, res) => {
  const { name, description, genresGame, released, platforms, rating } =
    req.body;
    if (Object.values(req.body)[0].length === 0) {
    console.log("PROPERTISSS",req.body)
    
    res.status(404).send("Please complete the required Data");
  } else {
    console.log("PROPERTISSS",typeof Object.values(req.body)[0])
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
      console.log(error.message);
      res.status(404).send("Some data must been completed");
    }
    }
  
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const game = id.includes("-")
      ? await Videogame.findByPk(id)
      : await getGamesById(id);

    res.status(200).send(game || "game not found");
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
