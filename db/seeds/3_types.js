
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
        {name: 'Vue', image: 'vue.png'},13
        {name: 'Java', image: 'java.png'},14
        {name: 'C#', image: 'csharp.png'},15
        {name: '.Net', image: 'net.png'},16
        {name: 'Python', image: 'python.png'},
        {name: 'Django', image: 'django.png'},18
        {name: 'Computer_Science', image: 'cs.png'}19
      ]);
    });
};
