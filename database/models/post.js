module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {}
  );
  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: "userId",
      as: "author",
      onDelete: "CASCADE"
    });
  };
  return Post;
};
