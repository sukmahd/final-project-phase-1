'use strict'

const express = require('express');
const router = express.Router();
const model = require('../models');


router.get('/', function(req, res){
  res.send('hai')
})


router.get('/signup', function(req,res){
  res.render('signup', {title: 'Signup', msg:''})
})

router.post('/signup', function(req, res){
  model.User.create({
    username: req.body.username,
    password: req.body.password,
    role: 'member'
  })
  .then(function(){
    res.redirect('login')
  })
})


router.get('/login', function(req, res){
  res.render('login', {title: 'login', msg: ''})
})

router.post('/login', function(req,res){
  if(!req.body.username || !req.body.password)
  {
    res.send('password dan username harus di isi!')
  }
  else
  {
    model.User.findOne({
      where: {
        username:req.body.username
      }
    })
    .then(function(row){
      if(row.password == req.body.password)
      {
        res.redirect('/menu')
      }
      else
      {
        res.render('login', {title: 'login', msg: 'password salah'})
      }
    })
    .catch(function(err){
      res.send('user not found')
    })
  }
})

router.get('/logout', function(req,res){
  req.session.destroy(err =>{
    res.redirect('/');
  })
})




module.exports = router
