const axios = require("axios");
const { Videogame, Genre, Op } = require("../db");
const { API_KEY } = process.env;

function arrayApiGamesHome() {
  let page = 2;
  let apis = [`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`];
  while (page <= 2) {
    apis.push(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=40`
    );
    page++;
  }
  return apis;
}
function arrayApiGamesByName(name) {
  let page = 2;
  let apis = [
    `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=40`,
  ];
  while (page <= 2) {
    apis.push(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&search=${name}&page_size=40`
    );
    page++;
  }
  return apis;
}

async function getApiData(api) {
  try {
    const dataApi = await axios.get(api);
    const results = dataApi.data.results;
    return results;
  } catch (error) {
    console.log(error.message);
  }
}

const apisHome = arrayApiGamesHome();
async function fetchApiGamesInit() {
  let toClean = [];
  for (let i = 0; i < apisHome.length; i++) {
    try {
      const data = await getApiData(apisHome[i]);
      toClean = toClean.concat(data);
      console.log("Fetching finished");
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log("LENGTH fetchapis", toClean.length);

  return toClean;
}

async function fetchApiGamesName(name) {
  let apisByName = arrayApiGamesByName(name);
  let toClean = [];
  for (let i = 0; i < apisByName.length; i++) {
    try {
      const data = await getApiData(apisByName[i]);
      toClean = toClean.concat(data);
      console.log("Fetching by name finished");
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log("LENGTH fetch by name", toClean.length);

  return toClean;
}
// console.log("FUERA DE LA FUNC",toClean)
// console.log( "to clean", toCleanDataGames)
function cleanDataFromApi(rawData) {
  return rawData.map((game) => {
    return {
      id: game.id,
      name: game.name,
      genresGame: game.genres.map((el) => el.name),
      img: game.background_image,
      rating: game.rating,
    };
  });
  // console.log("Clean data",cleanData)
}
// let gamesCleanedApi=null;
// fetchApiGamesInit()
//   .then((data) => {
//     console.log(data.length);
//     //  console.log(cleanDataFromApi(data))
//     gamesCleanedApi= cleanDataFromApi(data)
//   })
//   .catch((err) => console.log(err));

async function getGamesDb(name) {
  const condition = name
    ? {
        where: { name: { [Op.substring]: name.toLowerCase() } },
        include: {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
          // repasar
        },
      }
    : {
        include: {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
          // REVISAR
        },
      };

  let resultQuery = JSON.parse(
    JSON.stringify(await Videogame.findAll(condition))
  );
  return resultQuery.map((g) => ({
    ...g,
    genresGame: g.genres.map((g) => g.name),
  }));
}
async function getGamesById(id) {
  const games_api_by_id = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
  try {
    const dataGame = await axios.get(games_api_by_id);

    // console.log("desde index",dataGame.data)
    const game = {
      img: dataGame.data.background_image,
      name: dataGame.data.name,
      genresGame: dataGame.data.genres.map((el) => el.name),
      description: dataGame.data.description,
      released: dataGame.data.released,
      rating: dataGame.data.rating,
      platforms: dataGame.data.platforms.map((el) => el.platform.name),
    };
    return game;
  } catch (error) {
    console.log(error.message);
  }
}

async function insertGenresDb() {
  const genres_api = `https://api.rawg.io/api/genres?key=${API_KEY}`;
  try {
    const dataGenres = await getApiData(genres_api);
    // SACO LOS AWAIT ??

    const genres = await dataGenres.map((genres) => {
      return { name: genres.name, id_genre: genres.id };
    });
    await genres.forEach((el) =>
      Genre.findOrCreate({
        where: { name: el.name, id_genre: el.id_genre },
      })
    );

    console.log("genres  succesfully created");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  insertGenresDb,
  fetchApiGamesInit,
  fetchApiGamesName,
  cleanDataFromApi,
  getGamesDb,
  getGamesById,
};
