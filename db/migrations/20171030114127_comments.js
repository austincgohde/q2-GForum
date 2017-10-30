
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table)=>{
    table.increments();
    table.integer("user_id");
    table.integer("post_id");
    table.string("content");
    table.integer("upvote");
    table.integer("downvote")
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
