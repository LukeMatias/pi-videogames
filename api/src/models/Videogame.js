const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
    id: {
      type: DataTypes.UUID,
      // secuencia de caracteres aleatorias
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // genresGame: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   allowNull: false,
    // },
    createdUser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:
        "https://w7.pngwing.com/pngs/110/520/png-transparent-pikachu-pokemon-go-pokemon-x-and-y-ash-ketchum-pikachu-leaf-dog-like-mammal-flower.png",
    },
  });
};
