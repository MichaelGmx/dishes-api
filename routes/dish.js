var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Dish = require('../models/Dish.js');

/* GET ALL Dished */
router.get('/', function(req, res, next) {
  Dish.find(function(err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET Single Dish by ID */
router.get('/:id', function(req, res, next) {
  Dish.findById(req.params.id ,function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Save Dish */
router.post('/', function(req, res, next) {
  req.body.mark_del = false;
  req.body.create_date = Date.now();
  req.body.update_date = Date.now();
  req.body.update_by = req.body.create_by;
  
  Dish.create(req.body ,function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Update Dish */
router.put('/:id', function(req, res, next) {
  req.body.update_date = Date.now();

  Dish.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Delete Dish */
router.delete('/:id', function(req, res, next) {
  Dish.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;