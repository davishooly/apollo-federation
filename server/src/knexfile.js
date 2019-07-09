module.exports = {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST,
      user: process.env.PG_USER || 'ke-c02rc5yhfvh3',
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB_NAME || 'shopping_app'
    },
  migrations: {
    directory: `${__dirname}/knex/migrations`,
  }
};
