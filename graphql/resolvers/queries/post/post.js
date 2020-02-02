module.exports = {
  post: (_parent, { id }, { db }) => db.Post.findByPk(id),
  posts: (_parent, { userId }, { db }) =>
    db.Post.findAll({
      where: { userId },
    }),
};
