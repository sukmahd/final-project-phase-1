'use strict'

const express = require('express');
const router = express.Router();
const model = require('../models');


router.get('/:idg', function(req,res){
  model.Post.findAll({
    where: {
      GroupId: req.params.idg
    },
    include:[{all:true}]
  })
  .then(function(rows){
    res.render('post', {title: 'Post', id: req.session.user.id, data: rows, idg: req.params.idg})
  })
})

router.post('/:id/:idg', function(req,res){
  model.Post.create({
    UserId: req.params.id,
    GroupId: req.params.idg,
    post: req.body.post
  })
  .then(function(){
    res.redirect(`/post/${req.params.idg}`)
  })
})


module.exports = router;
