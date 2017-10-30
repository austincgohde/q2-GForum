
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {link: 'linktocoolstuff.com', type_id: 1, blurb: 'this is a great resource!'}
      ]);
    });
};
