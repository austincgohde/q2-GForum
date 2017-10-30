const users = require("../controllers/users.js");
const posts = require("../controllers/posts.js");
const comments = require("../controllers/comments.js");
module.exports = function(app){

app.get('/', users.index);

app.post('/login', users.check);

app.get('/register', users.getRegister);

app.post('/register', users.create);

app.get('/update', users.myupdate);

app.post('/update', users.update);

app.get('/overview', users.overview);

app.get('/helps/:type', posts.help);

app.post('/helps', posts.reply);

app.get('/resources', posts.resource);

}
