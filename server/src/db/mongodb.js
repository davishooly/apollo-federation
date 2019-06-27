import { MongoClient } from 'mongodb';

class MongoDb extends MongoClient {
  constructor(url) {
    super(url, { useNewUrlParser: true });
    this.connect((err) => {
      if (err) throw Error(err.message);

      console.log('🚀 Connected successfully to MongoDB server. Enjoy! 🤾 ‍');
      this.db = this.db(process.env.DB_NAME);
      this.users = this.db.collection('users');
      this.users.createIndex({username: 1}, {unique: true})
    });
  }

  createUser = async user => await this.users.insertOne({ ...user }, {unique:true})
}

export default MongoDb;
