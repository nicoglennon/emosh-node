module.exports = {
  createUser: (_parent, { user }, { db }) => db.User.create({ ...user }),
  updateUser: async (_parent, { id, user }, { db }) => {
    const updatedUser = await db.User.update(
      { ...user },
      {
        where: {
          id,
        },
        plain: true,
        returning: true,
      },
    );
    return updatedUser[1].dataValues;
  },
  deleteUser: (_parent, { id }, { db }) =>
    db.User.destroy({
      where: {
        id,
      },
    }),
};
