const { Router } = require("express");
const router = Router();
const {  Genres } = require("../db");

router.get("/", async (req, res) => {
  // res.send("ok")

  try {
    const getGenres = await Genres.findAll();
    res.send(getGenres);
  } catch (error) {
    res.send(error);
  }
});

module.exports=router;