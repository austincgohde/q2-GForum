const knex = require('../db/knex.js');
const encryption = require("../config/encryption.js");

module.exports = {

  index: (req, res) => {

    if(!req.session.user) {
      req.session.user = 0;
    }

    if(!req.session.errMsg) {
      req.session.errMsg = "";
    }

    if(!req.session.delMsg) {
      req.session.delMsg = "";
    }

    res.render("pages/index", { errMsg: req.session.errMsg, delMsg: req.session.delMsg });

  },

  check: (req, res) => {
    knex("users")
      .select("users.id", "users.first_name", "users.auth_level", "users.password", "cohorts.name")
      .where("email", req.body.email)
      .join("cohorts", "cohorts.id", "users.cohort_id")
      .then((result) => {
        let user = result[0]
        encryption.check(user, req.body)
          .then((isValid) => {
            if(isValid) {
              req.session.errMsg = "";

              req.session.user = {
                id: user.id,
                name: user.first_name,
                auth_level: user.auth_level,
                cohort: user.name
              }
              req.session.save(() => {
                res.redirect("/overview");
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
        req.session.errMsg = "The email and password provided are incorrect. Please try again.";
        req.session.save(() => {
          res.redirect("/");
        })
      })
  },

  getRegister: (req, res) => {

    knex("cohorts")
      .then((result) => {
        res.render("pages/register", { cohorts: result })
      })
  },

  create: (req, res) => {
    encryption.hash(req.body)
      .then((encryptedUser) => {
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

            req.session.errMsg = "";
            req.session.delMsg = "";

            req.session.user = {
              id: user.id,
              name: user.first_name,
              auth_level: user.auth_level,
            }

            req.session.save(() => {
              res.redirect("/overview")
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

  logout: (req, res) => {
    delete req.session.user;
    req.session.errMsg = "";
    req.session.save(() => {
      res.redirect("/");
    })
  },

  getOverview: (req, res) => {
    knex.raw(`SELECT posts.title, posts.content, posts.created_at, users.first_name, users.last_name
      FROM posts
      JOIN users ON users.id = posts.user_id
      WHERE posts.type_id = 1
      ORDER BY posts.created_at DESC`)
      .then((result) => {
        let posts = result.rows;

        delete req.session.type;

        for(let i = 0; i < posts.length; i++) {
          let timeFormat = String(posts[i].created_at).slice(0, 21);
          posts[i].created_at = timeFormat;
        }

        res.render("pages/overview", { interestings: posts, user: req.session.user.name, cohort: req.session.user.cohort});
      })
  },

  getProfile: (req, res) => {
    knex("users")
      .where("id", req.session.user.id)
      .then((result) => {
        res.render("pages/profile", { user: result[0] })
      })
      .catch((err) => {
        console.error(err);
      })
  },

  updateProfile: (req, res) => {
    if(req.body.password && req.body.newPassword) {
      knex("users")
        .where("id", req.session.user.id)
        .then((result) => {
          let encryptedUser = result[0];
          let user = {
            password: req.body.password
          }
          encryption.check(encryptedUser, user)
            .then((isValid) => {
              if(isValid) {

                user.password = req.body.newPassword;
                encryption.hash(user)
                  .then((encryptedUser) => {
                    knex("users")
                      .where("id", req.session.user.id)
                      .update({
                        first_name: req.body.firstName,
                        last_name: req.body.lastName,
                        email: req.body.email,
                        password: encryptedUser.password
                      }, "*")
                      .then((result) => {
                        req.session.user.name = result[0].first_name;
                        req.session.save(() => {
                          res.redirect("/profile")
                        })
                      })
                  })
              } else {
                req.session.errMsg = "Invalid information. Please try again"
                req.session.save(() => {
                  res.redirect("/profile")
                })
              }
            })
        })
    } else {

      knex("users")
        .where("id", req.session.user.id)
        .update({
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          email: req.body.email
        }, "*")
        .then((result) => {
          req.session.user.name = result[0].first_name;
          req.session.save(() => {
            res.redirect("/profile")
          })
        })
    }
  },

  delProfile: (req, res) => {
    knex("users")
      .where("id", req.session.user.id)
      .del()
      .then(() => {
        req.session.user.id = {};
        req.session.errMsg = "";
        req.session.delMsg = "Sorry, you left us - Click below to create a new profile!"
        req.session.save(() => {
          res.redirect("/")
        })
      })
  }
};
