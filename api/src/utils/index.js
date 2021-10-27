const axios = require("axios");
const { Videogames, Genres } = require("../db");
const { API_KEY } = process.env;

let page = 2;
// End Points
const games_api_page = `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=40`;

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

async function getGames() {
  const games_api = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`;
  try {
    const dataGames = await getApiData(games_api);

    const games = dataGames.map((game) => {
      return {
        name: game.name,
        genres: game.genres,
        img: game.background_image,
      };
    });
    // if (name) {
    //   return games.filter((game) => game.name.toLowerCase().includes(name));
    // }
    return games;
  } catch (error) {
    console.log(error.message);
  }
}
async function getGamesByName(name) {
  const games_api_by_name = `https://api.rawg.io/api/games?search=${name} &key=${API_KEY}`;
  try {
    const dataGames = await getApiData(games_api_by_name);

    const games = dataGames.map((game) => {
      return {
        name: game.name,
        genres: game.genres,
        img: game.background_image,
      };
    });
    return games;
  } catch (error) {
    console.log(error.message);
  }
}
async function getGamesById(id) {
  const games_api_by_id = `https://api.rawg.io/api/games/${id}?&key=${API_KEY}`;
  try {
    const dataGame = await getApiData(games_api_by_id);

    const game = {
      img: dataGame.background_image,
      name: dataGame.name,
      genres: dataGame.genres,
      description: dataGame.description,
      released: dataGame.released,
      rating: dataGame.rating,
      platforms: dataGame.platforms,
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

    const genres = dataGenres.map((genres) => {
      return { name: genres.name, id_genre: genres.id };
    });
    const genresCreated = await Genres.bulkCreate(genres);
    // console.log(genresCreated.map(el =>el.toJSON()))
    console.log("genres  succesfully created");
    // return gamesCreated;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { insertGenresDb, getGames, getGamesByName,getGamesById };
// const { results, next } = data.data;
// const dataNext = await axios.get(next);
// const allData = Promise.all([data.data.results, dataNext.data.results]);

// allData.then(async (values) => {
//   // console.log(values);
//   const creados = [];
//   for (let i = 0; i < values.length; i++) {
//     for (let j = 0; j < values[i].length; j++) {
//       // const create = Videogame.create(values[i][j]);
//       // const creates = { ...create, creates };
//       creados.push(values[i][j]);
//     }
//   }

//   const intoDb = creados.map(async (game) => {
//     const { name, released } = game;
//     const newGame = { name, released };

//     await Videogame.create({name,released});
//   });

//   res.send(creados);
// });
// await axios.get("https://api.rawg.io/api/games?key=bc1d837b88814a1aa7d25aa7f9538ac6")
// .then((data)=>res.send(data.data))
// res.send(data.data)
// Videogame.findAll().then(async(games) => res.send(await games));
