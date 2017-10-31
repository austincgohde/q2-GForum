
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {name: 'interesting'},
        {name: 'HTML'},
        {name: 'CSS'},
        {name: 'JS'},
        {name: 'jQuery_&_DOM'},
        {name: 'Ajax_&_HTTP'},
        {name: 'Node'},
        {name: 'Express'},
        {name: 'Knex'},
        {name: 'React'},
        {name: 'Redux'},
        {name: 'Angular'},
        {name: 'Vue'},
        {name: 'Java'},
        {name: 'C#'},
        {name: '.Net'},
        {name: 'Python'},
        {name: 'Django'},
        {name: 'Computer_Science'}
      ]);
    });
};
