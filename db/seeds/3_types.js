
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {name: 'interesting', image: ''},
        {name: 'HTML', image: 'html.png'},
        {name: 'CSS', image: 'css.png'},
        {name: 'JS', image: 'js.png'},
        {name: 'jQuery_&_DOM', image: 'jquery.png'},
        {name: 'Ajax_&_HTTP', image: 'ajax.png'},
        {name: 'Node', image: 'node.png'},
        {name: 'Express', image: 'express.png'},
        {name: 'Knex', image: 'knex.png'},
        {name: 'React', image: 'react.png'},
        {name: 'Redux', image: 'redux.png'},
        {name: 'Angular', image: 'angular.png'},
        {name: 'Vue', image: 'vue.png'},
        {name: 'Java', image: 'java.png'},
        {name: 'C#', image: 'csharp.png'},
        {name: '.Net', image: 'net.png'},
        {name: 'Python', image: 'python.png'},
        {name: 'Django', image: 'django.png'},
        {name: 'Computer_Science', image: 'cs.png'}
      ]);
    });
};
