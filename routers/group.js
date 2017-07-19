const express = require('express');
const router = express.Router();
const model = require('../models');


router.get('/', function(req, res) {
  model.Group.findAll()
  .then(result => {
    res.render('groups', {datas: result});
  })
})

router.get('/myGroups', function (req, res) {
  model.Group
})
