const { Router } = require("express");
const router = Router();
const videoGames = require("./videogames.js");
const genres = require("./genre.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videoGames);
router.use("/genres", genres);

module.exports = router;
