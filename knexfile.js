module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./server/data/movies.db3",
    },
    useNullAsDefault: null,
    migrations: {
      directory: "./server/data/migrations",
    },
    seeds: {
      directory: "./server/data/seeds",
    },
  },

  staging: {},

  production: {},
};
