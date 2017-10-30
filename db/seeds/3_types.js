
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {name: 'interesting'},
        {name: 'CSS'},
        {name: 'JavaScript'},
        {name: 'HTML'},
        {name: 'Python'},
        {name: 'Java'},
        {name: 'C#'},
        {name: 'Ruby'},
        {name: 'PHP'},
        {name: 'R'},
        {name: 'C'},
        {name: 'C++'}
      ]);
    });
};
