const axios = require("axios");
const { Videogames, Genres } = require("../db");
const { API_KEY } = process.env;

// End Points

async function getApiData(api) {
  try {
    const dataApi = await axios.get(api);
    const results = dataApi.data.results;
    return results;
  } catch (error) {
    console.log(error.message);
  }
  // const genresApi = await axios.get(genres_api);
  // const resultsGenres = genresApi.data.results;

  // const gamesAndGenres = await Promise.all([resultsGames , resultsGenres])
}

function arrayApis(name) {
  let page = 1;
  let arr_apis = [];
  while (page <= 3) {
    console.log("entro al while")
    if (!name) {
      const games_api =
        page > 1
          ? `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=40`
          : `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`;
      arr_apis.push(games_api);
      ++page;
    } else {
      const games_api_names =
        page > 1
          ? `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&search=${name}+`
          : `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=40`;
      console.log("entro al else");
      arr_apis.push(games_api_names);
      ++page;
    }
  }
  console.log("EL NAME",name)
  console.log("LENGTH DESDE ARR APIS", arr_apis);
  return arr_apis;
}

async function getGames(name) {
  const apis = arrayApis(name);
  let allGames=[];

  for (let i = 0; i < apis.length; i++) {
    try {
      const data = await getApiData(apis[i]);
      const games = data.map((game) => {
        return {
          id: game.id,
          name: game.name,
          genres: game.genres.map((el) => el.name),
          img: game.background_image,
        };
      });
      allGames = allGames.concat(games);
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log("LENGTH DESDE ALL GAMES", allGames.length);
  return allGames;
}

async function getGamesDb(condition) {
  return await Videogames.findAll(condition);
}
// async function getGamesByName(name) {
//   let page_by_name = 1;
//   // const games_api_by_name_pages = `https://api.rawg.io/api/games?key=${API_KEY}&page=${page_by_name}&search=${name}+`;
//   // `https://api.rawg.io/api/games?key=${API_KEY}&page=${page_by_name}&search=${name}+`
//   try {
//     const dataGames = await getApiData(games_api_by_name);
//     // SACO LOS AWAIT ??
//     const games = await dataGames.map((game) => {
//       return {
//         name: game.name,
//         genres: game.genres,
//         img: game.background_image,
//       };
//     });
//     return games;
//   } catch (error) {
//     console.log(error.message);
//   }
// }
async function getGamesById(id) {
  const games_api_by_id = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
  try {
    const dataGame = await axios.get(games_api_by_id);

    // console.log("desde index",dataGame.data)
    const game = {
      img: dataGame.data.background_image,
      name: dataGame.data.name,
      genres: dataGame.data.genres.map((el) => el.name),
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
      Genres.findOrCreate({
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
  getGames,
  getGamesById,
  getGamesDb,
};
