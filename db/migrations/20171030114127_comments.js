
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table)=>{
    table.increments();
    table.integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .index();
    table.integer("post_id")
      .references("id")
      .inTable("posts")
      .onDelete("CASCADE")
      .index();
    table.string("content");
    table.integer("upvote");
    table.integer("downvote")
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
