exports.up = async function (knex) {
  await knex.schema.createTable("movies", (table) => {
    table.increments("movie_id");
    table.text("movieName", 128).unique().notNullable();
    table.integer("movieReview").notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("movies");
};
