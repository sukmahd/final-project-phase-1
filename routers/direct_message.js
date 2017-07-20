'use strict'

const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/direct/:id/:id2', function(req, res) {
  model.UserToUser.findAll(
  {
    include: [{all:true}],
    where:
    {
      UserId_1: req.params.id,
      UserId_2: req.params.id2,
    }
  })
  .then(result => {

  })
})
