const knex = require('../db/knex.js');
const encryption = require("../config/encryption.js");

module.exports = {

  index: (req, res) => {

    if(!req.session.user) {
      req.session.user = {};
    }

    if(!req.session.errMsg) {
      req.session.errMsg = "";
    }

    res.render("index", { user: req.session.user, errMsg: req.session.errMsg });

  },

  check: (req, res) => {
    knex("users")
      .where("email", req.body.email)
      .then((result) => {
        let user = result[0]
        encryption.check(user, req.body)
          .then((isValid) => {
            if(isValid) {
              req.session.user = {
                name: user.first_name,
                auth_level: user.auth_level,
              }
              req.session.save(() => {
                res.redirect("/");
              })
            } else {
              req.session.errMsg = "The email and password provided are incorrect. please try again.";
              req.session.save(() => {
                res.redirect("/");
              })
            }
          })
      })
      .catch((err) => {
        console.error(err);
        req.session.errMsg = "The email and password provided are incorrect. Please try again.";
        req.session.save(() => {
          res.redirect("/");
        })
      })
  },

  getRegister: (req, res) => {
    res.render("register");
  },

  create: (req, res) => {
    encryption.hash(req.body)
      .then((encrytedUser) => {
        knex("users")
          .insert({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: encryptedUser.password,
            cohort_id: req.body.cohort,
            auth_level: 1
          }, "*")
          .then((result) => {
            let user = result[0];

            req.session.user = {
              name: user.first_name,
              auth_level: user.auth_level,
            }

            req.session.save(() => {
              res.redirect("/")
            })
          })
          .catch((err) => {
            req.session.errMsg = "You have entered invalid info."
            req.session.save(() => {
              res.redirect("/register");
            })
          })
      })
  },

  // getProfile: (req, res) => {
  //
  // }
};
