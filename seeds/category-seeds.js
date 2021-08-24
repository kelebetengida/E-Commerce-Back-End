const { Category } = require('../models');

const categoryData = [
  {
    Category_name: 'Shirts',
  },
  {
    Category_name: 'Shorts',
  },
  {
    Category_name: 'Music',
  },
  {
    Category_name: 'Hats',
  },
  {
    Category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
