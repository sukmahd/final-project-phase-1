'use strict'

const express = require('express');
const app = express();
const model = require('./models');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const index = require('./routers/index');
const menu = require('./routers/menu');
const post = require('./routers/post');
const Group = require('./routers/group');
const Friend = require('./routers/friend');

// Socket IO
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('a user connected', socket.handshake.headers['user-agent']);
  socket.on('post message', function(msg, org){
    io.sockets.emit('new message', { msg: msg, username:org })
  });
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'hacktiv',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))


app.use('/', index)

app.use((req,res, next)=>{
  if(req.session.user){
    next();
  }else{
    res.render('login', {title:'login', msg: 'anda harus login'});
  }
})

app.use('/menu', menu);
app.use('/post', post);
app.use('/friend', Friend)

app.get('/test', function(req, res){
  res.send('ini login')
})



app.use('/group', Group)


server.listen(process.env.PORT || 3002);
