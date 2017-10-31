const knex = require('../db/knex.js');
const encryption = require("../config/encryption.js");

/*get posts, join users, join types, join comments.  posts(title, content, upvote, downvote), users(first name), types(name), Comments(users.name, content, upvote, downvote) */

module.exports = {
//getHelp attempt 1:
  getHelp: function(req, res){
    knex('posts')
      .then((postsResults)=>{
        knex('users')
          .where('user_id', req.params.id)
            .then((usersResults)=>{
              .knex('types')
                .where('type_id', req.params.id)
                .then((typesResults)=>{
                  .knex('comments')
                    .where('user_id',req.params.id)
                      .then((commentsResults)=>{
                        res.render('/helps/', {posts: postResults[0], users: usersResults, types: typesResults, comments: commentsResults});
                      });
                    });
                  });
                });
                .catch((err) => {
                  console.error(err)
                });
              },

//getHelp attempt 2:

getHelp: function(req, res){
  knex('posts')
    .then((postsResults)=>{
      knex('users')
        .where('user_id', req.body.user_id)
          .then((usersResults)=>{
            .knex('comments')
              .where('user_id',req.body.user_id)
                .then((commentsResults)=>{
                      res.render('/helps/', {posts: postResults[0], users: usersResults, comments: commentsResults});
                    });
                  });
                });
              .catch((err) => {
                console.error(err)
              });
            },

  createHelp: function(req, res){
    knex('posts')
      .then((postsResults)=>{
        knex('users')
          .where('user_id', req.params.id)
            .then((usersResults)=>{
              .knex('types')
                .where('type_id', req.params.id)
                .then((typesResults)=>{
                  .knex('comments')
                    .where('user_id',req.params.id)
                      .then((commentsResults)=>{
                        res.render('/helps', {posts: postResults[0], users: usersResults, types: typesResults, comments: commentsResults});
                      });
                    });
                  });
                });
                .catch((err) => {
                  console.error(err)
                });
              },

  resource: function(req, res){
    knex('posts')
      .then((postsResults)=>{
        knex('users')
          .where('user_id', req.params.id)
            .then((usersResults)=>{
              .knex('types')
                .where('type_id', req.params.id)
                .then((typesResults)=>{
                  .knex('comments')
                    .where('user_id',req.params.id)
                      .then((commentsResults)=>{
                        res.render('/resources', {posts: postResults[0], users: usersResults, types: typesResults, comments: commentsResults});
                      });
                    });
                  });
                });
                .catch((err) => {
                  console.error(err)
                });
              },

  addResource: function(req, res){
    knex('posts')
      .then((postsResults)=>{
        knex('users')
          .where('user_id', req.params.id)
            .then((usersResults)=>{
              .knex('types')
                .where('type_id', req.params.id)
                .then((typesResults)=>{
                  .knex('comments')
                    .where('user_id',req.params.id)
                      .then((commentsResults)=>{
                        res.render('/resources/create', {posts: postResults[0], users: usersResults, types: typesResults, comments: commentsResults});
                      });
                    });
                  });
                });
                .catch((err) => {
                  console.error(err)
                });
              },

  interest: function(req, res){
    knex('posts')
      .then((postsResults)=>{
        knex('users')
          .where('user_id', req.params.id)
            .then((usersResults)=>{
              .knex('types')
                .where('type_id', req.params.id)
                .then((typesResults)=>{
                  .knex('comments')
                    .where('user_id',req.params.id)
                      .then((commentsResults)=>{
                        res.render('/interestings', {posts: postResults[0], users: usersResults, types: typesResults, comments: commentsResults});
                      });
                    });
                  });
                });
                .catch((err) => {
                  console.error(err)
                });
              },

};
