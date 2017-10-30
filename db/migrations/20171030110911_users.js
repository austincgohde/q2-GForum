
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table)=>{
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.string("cohort");
    table.string("email");
    table.string("password");
    table.integer("auth_level");
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
