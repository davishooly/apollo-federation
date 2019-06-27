import MongoDb from './mongodb';

const mongoClient = new MongoDb(process.env.DATABASE_URL);

export { mongoClient };
