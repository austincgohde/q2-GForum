const knex = require("../db/knex.js");

module.exports = {

  postComment: (req, res) => {
    knex("comments")
      .insert({
        user_id : req.session.user.id,
        post_id: 1,
        content: req.body.content
      })
  }
};
