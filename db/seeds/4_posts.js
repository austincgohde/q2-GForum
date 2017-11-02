
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {user_id: 1, title: "Look at my cool project", content: "Here is my cool project.", upvote: 0, downvote: 0},
      ]);
    });
};
