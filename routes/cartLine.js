var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var CartLine = require('../models/CartLine.js');

/* GET ALL CartLines */
router.get('/', function(req, res, next) {
  CartLine.find(function(err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET Single CartLine by ID */
router.get('/:id', function(req, res, next) {
  CartLine.findById(req.params.id ,function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Save CartLine */
router.post('/', function(req, res, next) {
  req.body.create_date = Date.now();
  req.body.update_date = Date.now();
  req.body.update_by = req.body.create_by;
  
  CartLine.create(req.body ,function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Update CartLine */
router.put('/:id', function(req, res, next) {
  req.body.update_date = Date.now();

  CartLine.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Delete CartLine */
router.delete('/:id', function(req, res, next) {
  CartLine.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;