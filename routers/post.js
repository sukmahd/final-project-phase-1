'use strict'

const express = require('express');
const router = express.Router();
const model = require('../models');
const list = require('../helpers/listContri')


router.get('/:idg', function(req,res){
  model.Post.findAll({
    where: {
      GroupId: req.params.idg
    },
    include:[{all:true}]
  })
  .then(function(rows){
    model.Group.findOne({
      where:{
        id:req.params.idg
      }
    })
    .then(function(grup){
      let contri = list(rows);
      res.render('post', {title: 'Post', id: req.session.user.id, data: rows, idg: req.params.idg, contr: contri, grupName: grup.group_name})
    })
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

router.get('/delete/:id/:idg', function(req,res){
  model.Post.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(function(){
    res.render(`/post/${req.params.idg}`)
  })
})


module.exports = router;
