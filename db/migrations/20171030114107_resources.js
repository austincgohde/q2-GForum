
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resources', (table)=>{
    table.increments();
    table.string("link");
    table.integer("type_id")
      .references("id")
      .inTable("types")
      .onDelete("CASCADE")
      .index();
    table.string("blurb");
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources');
};
