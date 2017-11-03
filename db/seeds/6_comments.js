
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {user_id: 1, post_id: 1, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 1, content: "nifty website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 1, content: "awesome website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 1, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 2, content: "comment comment comment", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 2, content: "blah blah blah - this is my comment", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 2, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 2, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 3, content: "I need help with this too", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 3, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 3, content: "I can help wit this!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 3, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 4, content: "Can you show me more about this?", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 4, content: "I have another solution", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 4, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 4, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 5, content: "I can solve this problem", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 5, content: "cool design!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 5, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 5, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 6, content: "I can fix this", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 6, content: "I want help with this too!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 6, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 6, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 7, content: "I'm not sure how to solve that!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 7, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 7, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 7, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 8, content: "I'm confused!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 8, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 8, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 8, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 9, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 9, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 9, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 9, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 10, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 10, content: "nifty website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 11, content: "awesome website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 11, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 12, content: "comment comment comment", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 12, content: "blah blah blah - this is my comment", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 12, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 12, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 13, content: "I need help with this too", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 13, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 13, content: "I can help wit this!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 13, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 14, content: "Can you show me more about this?", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 14, content: "I have another solution", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 14, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 14, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 15, content: "I can solve this problem", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 15, content: "cool design!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 15, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 15, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 16, content: "I can fix this", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 16, content: "I want help with this too!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 16, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 16, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 17, content: "I'm not sure how to solve that!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 17, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 17, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 17, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 18, content: "I'm confused!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 18, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 18, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 18, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 19, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 19, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 19, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 19, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 21, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 31, content: "nifty website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 20, content: "awesome website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 30, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 22, content: "comment comment comment", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 22, content: "blah blah blah - this is my comment", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 32, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 32, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 23, content: "I need help with this too", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 23, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 23, content: "I can help wit this!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 33, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 24, content: "Can you show me more about this?", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 34, content: "I have another solution", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 24, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 34, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 25, content: "I can solve this problem", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 35, content: "cool design!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 25, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 35, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 26, content: "I can fix this", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 36, content: "I want help with this too!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 26, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 36, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 27, content: "I'm not sure how to solve that!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 37, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 27, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 37, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 28, content: "I'm confused!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 38, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 28, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 38, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 29, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 39, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 29, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 39, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 41, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 51, content: "nifty website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 40, content: "awesome website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 50, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 42, content: "comment comment comment", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 52, content: "blah blah blah - this is my comment", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 42, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 52, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 43, content: "I need help with this too", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 53, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 43, content: "I can help wit this!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 53, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 44, content: "Can you show me more about this?", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 54, content: "I have another solution", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 44, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 54, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 45, content: "I can solve this problem", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 55, content: "cool design!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 45, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 55, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 46, content: "I can fix this", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 56, content: "I want help with this too!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 46, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 56, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 47, content: "I'm not sure how to solve that!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 57, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 47, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 57, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 48, content: "I'm confused!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 48, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 48, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 48, content: "cool website!", upvote: 0, downvote: 0},

        {user_id: 1, post_id: 49, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 49, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 49, content: "cool website!", upvote: 0, downvote: 0},
        {user_id: 1, post_id: 49, content: "cool website!", upvote: 0, downvote: 0},
      ]);
    });
};
