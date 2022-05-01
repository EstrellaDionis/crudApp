
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/fullStackApp.db3",
    },
    useNullAsDefault: null,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  staging: {
    
    }
  },

  production: {
   
  }
};
