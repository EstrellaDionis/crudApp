exports.up = async function (knex) {
  await knex.schema.createTable("movies", (table) => {
    table.increments();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("fruits");
};
