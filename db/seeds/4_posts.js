
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {user_id: 1, title: "Cool stuff", content: "Here is where we will post cool stuff.", upvote: 0, downvote: 0, type_id: 2},

      ]);
    });
};
