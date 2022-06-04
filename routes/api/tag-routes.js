const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  console.log("=========================");
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  console.log("=========================");
});

router.post('/', (req, res) => {
  // create a new tag
  console.log("=========================");
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  console.log("=========================");
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  console.log("=========================");
});

module.exports = router;
