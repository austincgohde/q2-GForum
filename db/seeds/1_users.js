
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Char', last_name: 'Spencer', cohort: 'g66', email: "char.anne.spencer@gmail.com", password: "gforumpass1", auth_level: 2},
        {first_name: 'Trevor', last_name: 'Young', cohort: 'g66', email: "trevorsemail@email.com", password: "gforumpass1", auth_level: 2},
        {first_name: 'Austin', last_name: 'Gohde', cohort: 'g66', email: "austinsemail@email.com", password: "gforumpass1", auth_level: 2},
      ]);
    });
};
