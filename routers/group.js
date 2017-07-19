const express = require('express');
const router = express.Router();
const model = require('../models');


router.get('/', function(req, res) {
  model.Group.findAll()
  .then(result => {
    res.render('group', {datas: result, title: "All Group"});
  })
})

router.get('/myGroup', function (req, res) {
  model.Post.findAll( {include: [ {all:true} ]} )
  .then(result => {
    res.render('myGroup');
  })
})

router.get('/group/:id/delete', function(req, res) {
  model.Post.findAll( {include: [ {all:true} ]} )
  .then(result => {

  })
})

module.exports = router;
