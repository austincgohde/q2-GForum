const knex = require('../db/knex.js');

module.exports = {

  index: (req, res) => {

    if(!req.session.user) {
      req.session.user = {};
    }

    res.render("index", { user: req.session.user });

  },

  check: (req, res) => {
    knex("users")
      .where("email", req.body.email)
      .then((result) => {

      })
  }
};
