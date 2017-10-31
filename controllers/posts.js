const knex = require('../db/knex.js');
const encryption = require("../config/encryption.js");

//Helps:
 module.exports = {

   getHelp: function(req, res){
     knex('types')
     .where('name', req.params.type)
     .select('id')
     .then((result)=>{
       req.session.type.id = result[0].id;
       knex('posts')
       .select("title", 'content', 'upvote', 'downvote', 'types.name', 'users.first_name', 'users.last_name' 'comments')
       .join('users', 'users.id', 'posts.user_id')
       .join('types', 'types.id', 'posts.type_id')
       .where('type_id', result[0].id)
       .then((result) => {

         res.render('pages/subject', {info: result} )
       })
     })
   },

     createHelp: function(req, res){
       knex('posts')
         .insert({
           title: req.body.title,
           content: req.body.content,
           user_id: req.session.user.id,
           type_id: req.session.type.id
         }, '*')
         .then((result)=>{
           res.redirect('/helps/'+result[0].id, result)
         })
          .catch((err) => {
            console.error(err)
          });
          },

   singlePost: function(req, res){
     knex('posts')
     .where('id', req.params.id)
     .select('title', 'content', 'types.name', 'users.first_name', 'users.last_name' 'upvotes', 'downvotes')
     .join('users', 'users.id', 'posts.user_id')
     .join('types', 'types.id', 'posts.type_id')
     .then((result)=>{
       let post = result[0];
       knex('comments')
       .where('posts_id', req.params.id)
       .select('content', 'upvotes', 'downvotes', 'users.first_name', 'users.last_name')
     })
     .join('users', 'users.id', 'comments.user_id')
     .then((result)=>{
       res.render('pages/post', { post: post, comments: result})
     });
   },

//Resources:


   resource: function(req, res){
       knex('resources')
       .then((result) => {
         res.render('/resources', {info: result} )
       })
       .catch((err) => {
         console.error(err)
       });
   },

    addResource: function(req, res){
       knex('resources')
         .insert({
           link: req.body.link,
           blurb: req.body.blurb
         }, '*')
         .then((result)=>{
           res.redirect('/resources/create'+result[0].id, result)
         })
        .catch((err) => {
          console.error(err)
         });
        },

 };
