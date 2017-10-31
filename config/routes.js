const users = require("../controllers/users.js");
const posts = require("../controllers/posts.js");
const comments = require("../controllers/comments.js");
module.exports = function(app){

app.get('/', users.index);

app.post('/login', users.check);

app.get('/register', users.getRegister);

app.post('/register', users.create);

app.get('/update', users.getProfile);

app.post('/update', users.updateProfile);

app.get ('/profile/delete', users.delProfile);

app.get('/overview', users.getOverview);

app.get('/helps/:type', posts.getHelp);
/*get posts, join users, join types, join comments.  posts(title, content, upvote, downvote), users(first name), types(name), Comments(users.name, content, upvote, downvote) */

app.post('/helps', posts.createHelp);

// app.get('/resources', posts.resource);
//
// app.post('/resources/create', posts.addResource);
//
// app.post('/interestings/create', posts.interest);
//
// app.get('/singlepost', posts.singlePost);

//app.get('/admin', )

}
