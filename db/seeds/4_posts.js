
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {user_id: 2, title: "Look at my cool project", content: "Here is my cool project.", upvote: 0, downvote: 0, type_id: 2},
        {user_id: 2, title: "onClick", content: "Trying to get on click to work. It's a challenge.", upvote: 1, downvote: 0, type_id: 5},
        {user_id: 2, title: "Styling", content: "Trying to do cool styling like I saw on this site. It's a challenge.", upvote: 1, downvote: 0, type_id: 3},
        {user_id: 2, title: "Accumulator", content: "Check out the accumulator I built.", upvote: 1, downvote: 0, type_id: 4},
        {user_id: 3, title: "Machine Learning", content: "Trying to figure out the python I need to use this machine learning project.", upvote: 1, downvote: 0, type_id: 17},
        {user_id: 1, title: "Grabbing elements", content: "Having trouble grabbing these elements. Please help.", upvote: 1, downvote: 0, type_id: 5},
        {user_id: 3, title: "Look at this Ajax problem I'm having", content: "Here is my cool project, but Im still having this problem.", upvote: 0, downvote: 0, type_id: 6},
        {user_id: 1, title: "Node issue", content: "Can you help me with this node issue?", upvote: 1, downvote: 0, type_id: 7},
        {user_id: 2, title: "Installing express", content: "Do I do npm install express --save or do I not need the --save?", upvote: 1, downvote: 0, type_id: 8},
        {user_id: 3, title: "React", content: "Check out the stuff I built.", upvote: 1, downvote: 0, type_id: 10},
        {user_id: 2, title: "Redux problem - need help", content: "Trying to do cool stuff like I saw on this site. It's a challenge.", upvote: 1, downvote: 0, type_id: 11},
        {user_id: 3, title: "Angular is giving me issues", content: "Can you take a look at this and explain why its not working?", upvote: 1, downvote: 0, type_id: 12},
        {user_id: 3, title: "Knex problems", content: "Can you take a look at this and explain why its not working?", upvote: 1, downvote: 0, type_id: 9},
        {user_id: 3, title: "Should I use Vue for this?", content: "Is this  a project I should be using chrome for?", upvote: 1, downvote: 0, type_id: 13},



      ]);
    });
};
