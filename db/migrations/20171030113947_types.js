
exports.up = function(knex, Promise) {
  return knex.schema.createTable('types', (table)=>{
    table.increments();
    table.string("name");
    table.string("image")
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('types');
};
