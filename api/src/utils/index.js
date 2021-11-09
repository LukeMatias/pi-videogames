const axios = require("axios");
const { Videogame, Genre, Op } = require("../db");
const { API_KEY } = process.env;
// APIS
const apiPageOne = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`;
const apiPageTwo = `https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=40`;

// function arrayApiGamesHome() {
//   let page = 2;
//   let apis = [`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`];
//   while (page <= 2) {
//     apis.push(
//       `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=40`
//     );
//     page++;
//   }
//   return apis;
// }
// function arrayApiGamesByName(name) {
//   let page = 2;
//   let apis = [
//     `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=40`,
//   ];
//   while (page <= 2) {
//     apis.push(
//       `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&search=${name}&page_size=40`
//     );
//     page++;
//   }
//   return apis;
// }

async function getApiData(api) {
  try {
    const dataApi = await axios.get(api);
    const results = dataApi.data.results;
    return results;
  } catch (error) {
    console.log(error.message);
  }
}
const arrayPromises = [getApiData(apiPageOne), getApiData(apiPageTwo)];

function fetchApiGamesName(name) {
  return getApiData(
    `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
  );
}

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
}

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
      description: dataGame.data.description_raw,
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
  cleanDataFromApi,
  getGamesDb,
  getGamesById,
  arrayPromises,
  fetchApiGamesName,
};
