
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Charlotte-Anne', last_name: 'Spencer', cohort_id: 1, email: "char@char.com", password: "$2a$10$Bm2Wrd1JUvJxw7vLU.9JY.5fnKXYkCDxMmz9z4HgWr60ae.24kX2u", auth_level: 2},
        {first_name: 'Trevor', last_name: 'Young', cohort_id: 1, email: "tcyoung4@asu.edu", password: "$2a$10$klNA9OK8GJcO5kQYUsPppOotHNjni0vR5BFNHv4UDbguxHXZ1Kpri", auth_level: 2},
        {first_name: 'Austin', last_name: 'Gohde', cohort_id: 1, email: "austinsemail@email.com", password: "$2a$10$EWgQya/x9itL1Mq1306gcenhZKmEBWHc5YhVnNqu9FS3tLLAlVgDS", auth_level: 2}
      ]);
    });
};
