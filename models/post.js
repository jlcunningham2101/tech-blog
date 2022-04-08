//declare related variables
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

//create the model for Post
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    //post title
    postTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //post username
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    //post contents
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //post date created
    postCreated: {
      type: DataTypes.DATE,
      defaultValue: Date.now(),
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
