const users = require("../controllers/users.js");
const posts = require("../controllers/posts.js");
const comments = require("../controllers/comments.js");

module.exports = function(app){

app.get('/', users.index);

app.post('/login', users.check);

app.get('/logout', users.logout);

app.get('/register', users.getRegister);

app.post('/register', users.create);

app.get('/about', users.about);

app.use(userAuth);

app.get("/delete", users.delProfile);

app.get('/profile', users.getProfile);

app.post('/update', users.updateProfile);

app.get ('/profile/delete', users.delProfile);

app.get('/overview', users.getOverview);

app.post('/helps', posts.createHelp);

app.get('/helps/:type', posts.getHelp);

app.get('/post/:id', posts.singlePost);

app.post("/comment/create", comments.postComment);

app.get('/upvote/post/:id', posts.upvote);

app.get('/downvote/post/:id', posts.downvote);

app.get('/upvote/comment/:id', comments.upvote);

app.get('/downvote/comment/:id', comments.downvote);

app.get('/upvote/comment/:id', comments.upvote);

app.get('/downvote/comment/:id', comments.downvote);

app.post('/interestings/create', posts.interest);

//app.get('/admin', )

}

let userAuth = (req, res, next) => {
  if(req.session.user) {
    next();
  } else {
    res.redirect("/")
  }
}
