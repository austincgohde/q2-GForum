
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {user_id: 1, title: "Look at my cool project", content: "Here is my cool project.", upvote: 0, downvote: 0},
        {user_id: 1, title: "onClick", content: "Trying to get on click to work. It's a challenge.", upvote: 1, downvote: 0},
        {user_id: 2, title: "Styling", content: "Trying to do cool styling like I saw on this site. It's a challenge.", upvote: 1, downvote: 0},
      ]);
    });
};
