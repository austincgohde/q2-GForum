
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table)=>{
    table.increments();
    table.integer("user_id");
    table.string("title");
    table.string("content");
    table.integer("upvote");
    table.integer("downvote");
    table.integer("type_id");
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
