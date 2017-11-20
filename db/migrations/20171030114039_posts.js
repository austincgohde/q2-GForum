
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table)=>{
    table.increments();
    table.integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .index();
    table.string("title");
    table.text("content");
    table.integer("upvote");
    table.integer("downvote");
    table.integer("type_id")
      .references("id")
      .inTable("types")
      .onDelete("CASCADE")
      .index();
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
