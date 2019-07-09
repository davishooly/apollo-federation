import knex from '../knex/index';

const createProduct = async ({ name, category, quantity }) => {
   return await knex
   .insert({ name, category, quantity }, ['name', 'category', 'quantity'])
   .into('products')
   .returning('*')
};

export default {
  createProduct
};
