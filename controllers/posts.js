const knex = require('../db/knex.js');
const encryption = require("../config/encryption.js");

//Helps:
 module.exports = {

   getHelp: function(req, res){
     console.log("SOmething shit");
     knex('types')
     .where('name', req.params.type)
     .then((result) => {

       req.session.type = result[0];

       if(req.session.type.name.includes("_")) {
         req.session.type.name = req.session.type.name.replace(/_/g, " ");
       }
       knex('posts')
       .where('posts.type_id', req.session.type.id)
       .select("posts.id", "posts.title", 'posts.content', 'posts.upvote', 'posts.downvote', 'types.name', 'users.first_name', 'users.last_name')
       .join('users', 'posts.user_id', 'users.id')
       .join('types', 'posts.type_id', 'types.id')
       .then((result) => {
         let posts = result;
         console.log(posts);
         for(let i = 0; i < posts.length; i++) {
           let timeFormat = String(posts[i].created_at).slice(0, 21);
           posts[i].created_at = timeFormat;
         }
       res.render('pages/subject', {posts: posts, type: req.session.type} )

       }).catch((err)=>{
         console.log(err);
       })


    }).catch((err)=>{
      console.log(err);
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
           res.redirect('/helps/'+req.session.type.name)
         })
          .catch((err) => {
            console.error(err)
         });
        },

   singlePost: function(req, res){
     let searchID = req.params.id;
     knex('posts')
     .where('posts.id', req.params.id)
     .select('posts.title', 'posts.content', 'types.name', 'users.first_name', 'users.last_name', 'posts.upvote', 'posts.downvote')
     .join('users', 'users.id', 'posts.user_id')
     .join('types', 'types.id', 'posts.type_id')
     .then((result)=>{
       let post = result[0];
       knex('comments')
       .where('comments.post_id', req.params.id)
       .select('comments.content', 'comments.upvote', 'comments.downvote', 'users.first_name', 'users.last_name')
       .join('users', 'users.id', 'comments.user_id')
       .then((result)=>{
         res.render('pages/post', { post: post, comments: result})
       })
       .catch((err) => {
         console.log(err);
       })

     })
     .catch((err) => {
       console.log(err);
     })
   },

//Resources:


   resource: function(req, res){
       knex('resources')
       .then((result) => {
         res.render('resources', {info: result} )
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

     interest: function(req, res){
       knex('posts')
         .insert({
           title: req.body.title,
           content: req.body.content,
           user_id: req.session.user.id,
           type_id: 1
         }, '*')
         .then((result)=>{
           res.redirect('/overview')
         })
          .catch((err) => {
            console.error(err)
          });
        },

//votes:

//update upvotes and downvotes to display on individual post pages.

    upvote: function(req, res){
      knex('posts')
      .where('posts.id', req.params.id)
      .update({
        upvote: upvote + 1
      })
      .then((result)=>{
        res.redirect('pages/post'+req.params.id)
      })
    },

    /*
Suggestion of how to connect to ejs:
    <button type="button" name="button">
                <a href="/upvote/<%=posts[i].id%>"> Upvote </a>
              </button>
    */

    downvote: function(req, res){
      knex('posts')
      .where('posts.id', req.params.id)
      .update({
        downvote: downvote + 1
      })
      .then((result)=>{
        res.redirect('pages/post'+req.params.id)
      })
    },
    /*
Suggestion of how to connect to ejs:
    <button type="button" name="button">
                <a href="/downvote/<%=posts[i].id%>"> Downvote </a>
              </button>
    */
 };
