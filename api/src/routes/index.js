const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videoGames = require("./videogames.js");
const genres = require("./genre.js");
// const gamePost = require("./gamePost.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videoGames);
router.use("/genres", genres);

module.exports = router;
