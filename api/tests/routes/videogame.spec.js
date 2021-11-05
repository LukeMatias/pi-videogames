/* eslint-disable import/no-extraneous-dependencies */
const { expect, assert } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Videogame, conn } = require("../../src/db.js");

const agent = session(app);
const videogame = {
  name: "Super Mario Bros",
  description: "Alto juego",
  released: "Buen día",
  rating: 5,
  platforms: "Sega, nintendo 789",
  genresGame: ["Action"],
};

describe("Videogame routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      // this.timeout(10000);
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Videogame.sync({ force: true }).then(() => Videogame.create(videogame))
  );
  describe("GET /videogames", () => {
    it("should get 200", () =>
      agent.get("/videogames").then((game) => {
        assert.equal(game);
        
        done();
      }).catch(err => done(err))
      
      
      );
  });
});
