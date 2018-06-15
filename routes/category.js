var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Category = require('../models/Category.js');

/* GET ALL Categories */
router.get('/', function(req, res, next) {
  Category.find(function(err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET Single Category by ID */
router.get('/:id', function(req, res, next) {
  Category.findById(req.params.id ,function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Save Category */
router.post('/', function(req, res, next) {
  req.body.mark_del = false;
  req.body.create_date = Date.now();
  req.body.update_date = Date.now();
  req.body.update_by = req.body.create_by;

  Category.create(req.body ,function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Update Category */
router.put('/:id', function(req, res, next) {
  req.body.update_date = Date.now();

  Category.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Delete Category */
router.delete('/:id', function(req, res, next) {
  Category.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;