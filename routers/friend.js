'use strict'

const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/', function(req, res) {
  model.User.findAll()
  .then(result => {
    res.render('friendlist', {datas: result, title: "Friend List"});
  })
});

router.get('/:id2', function(req, res) {
  model.UserToUser.findAll(
  {
    include: [{all:true}],
    where:
    {
      UserId_1: req.session.user.id,
      UserId_2: req.params.id2,
      $or:
      [{
          UserId_1: req.params.id2,
          UserId_2: req.session.user.id
      }]
    }
  })
  .then(result => {
    console.log(result);
    res.render('friend_chat', {datas: result, title: "Friend List"});
  })
})

module.exports = router;
