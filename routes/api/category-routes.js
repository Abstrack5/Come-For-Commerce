const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  console.log("=========================");
  Category.findAll({
    attributes: [
      'id',
      'category_name'
    ],
    order: [['category_name', 'DESC']]
  })
  .then((catergoryData) => res.json(catergoryData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // console.log("=========================");
  
});

router.post('/', (req, res) => {
  // create a new category
  // console.log("=========================");

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // console.log("=========================");
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  // console.log("=========================");
});

module.exports = router;
