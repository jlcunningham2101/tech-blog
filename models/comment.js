//declare related variables
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create the model for Comment
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    //post comments
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "post",
        key: "id",
      },
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
    modelName: "comment",
  }
);

module.exports = Comment;
