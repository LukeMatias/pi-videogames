const { Router } = require("express");
const router = Router();
const { getGames, getGamesById, getGamesDb } = require("../utils/index");

const { Videogames, Genres, Op } = require("../db");

router.get("/", async (req, res) => {
  const { name } = req.query;
  const condition = name
    ? {
        where: { name: { [Op.substring]: name.toLowerCase() } },
        include: {
          model: Genres,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      }
    : {};

  try {
    // DEBERÍA SACAR LOS AWAIT YA QUE ESTA EL PROMISE ALL ????
    // const games_api = name ? await getGamesByName(name) : await getGames();
    const games_api = await getGames(name);

    const games_db = name ? await getGamesDb(condition) : await getGamesDb();
    // const games_db = name ? getGamesDb(condition) : getGamesDb();
    let gamesTotal = [games_api, games_db];
    // let gamesTotal = Promise.all([getGames(name), games_db]);
    return res.send(gamesTotal.flat() || "Games not founds");
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/", async (req, res) => {
  const { name, description, genresGame, released, platforms, rating } =
    req.body;
  try {
    const newGame = await Videogames.create({
      name,
      description,
      released,
      rating,
      platforms,
      genresGame,
    });
    // revveeeerrrrrrrrr
    // const genresDb = await Genres.findAll({ where: { name: genre } });
    // newGame.addGenre(genresDb);
    // console.log(newGame.json())
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
      id.split("-").length > 2
        ? await Videogames.findByPk(id)
        : await getGamesById(id);

    res.status(200).send(game || "game not found");
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
