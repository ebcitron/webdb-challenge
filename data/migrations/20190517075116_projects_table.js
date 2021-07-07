exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(projects) {
    projects.increments();
    projects.string("name", 255).notNullable();
    projects.text("description").notNullable();
    projects.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
