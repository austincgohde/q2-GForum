
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {user_id: 1, post_id: 1, content: "cool website!", upvote: 1, downvote: 1}
      ]);
    });
};
