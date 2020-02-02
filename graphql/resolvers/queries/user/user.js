module.exports = {
  user: (_parent, { id }, { db }) =>
    db.User.findOne({
      where: { id },
      include: [
        {
          model: db.Post,
          as: 'posts',
        },
      ],
    }),
  users: (_parent, _args, { db }) =>
    db.User.findAll({
      include: [
        {
          model: db.Post,
          as: 'posts',
        },
      ],
    }),
};
