
exports.up = function(knex, Promise) {

  return knex.schema.createTable('products', (table) => {
       table.increments('id');
       table.string('name').notNullable();
       table.string('category').notNullable();
       table.integer('quantity').notNullable();
      })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('products')

};
