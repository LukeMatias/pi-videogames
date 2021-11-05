const { Router } = require("express");
const router = Router();
const {  Genre } = require("../db");

router.get("/", async (req, res) => {
  // res.send("ok")

  try {
    const getGenres = await Genre.findAll();
    res.send(getGenres);
  } catch (error) {
    res.send(error);
  }
});

module.exports=router;