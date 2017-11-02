const knex = require("../db/knex.js");

module.exports = {

  postComment: (req, res) => {
    knex("comments")
      .insert({
        user_id : req.session.user.id,
        post_id: req.session.post,
        content: req.body.content,
        upvote: 0,
        downvote: 0
      })
      .then(() => {
        res.redirect("/post/"+req.session.post);
      })
      .catch((err) => {
        console.error(err);
      })
  },

  upvote: function(req, res){
    knex('comments')
    .where('comments.id', req.params.id)
    .update("upvote", knex.raw(`upvote + 1`), '*')
    .then((result)=>{
      res.json(result)
    })
  },

  downvote: function(req, res){
    knex('comments')
    .where('comments.id', req.params.id)
    .update("downvote", knex.raw(`downvote + 1`), '*')
    .then((result)=>{
      res.json(result)
    })
  }

};
