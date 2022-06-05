const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  console.log("=========================");
  Category.findAll({
    include: [
      {
        model: Product
      }
    ]
  })
  .then(categoryData => res.json(categoryData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  console.log("=========================");
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product
      }
    ]
  })
  .then((categoryData) => {
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id'})
      return;
    } res.json(categoryData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
  
});

router.post('/', (req, res) => {
  // create a new category
  console.log("=========================");
  Category.create({
    category_name: req.body.category_name
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  console.log("=========================");
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
    )
    .then((categoryData) => {
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with that id' })
        return;
      } res.json(categoryData)
    })
    .catch(err => {
      console.log(err); 
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  console.log("=========================");
  Category.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(categoryData => {
    if (!categoryData) {
      res.status(404).json({ message: 'Category not found' });
      return;
    } 
    res.json(categoryData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
