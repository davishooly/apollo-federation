import MongoDb from './mongodb';
import pgClient from './psqldb';

const mongoClient = new MongoDb(process.env.DATABASE_URL);

export { mongoClient, pgClient };
