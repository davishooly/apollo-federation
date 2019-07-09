import { ApolloError } from 'apollo-server';
import isEmpty from 'validator/lib/isEmpty';

export const Mutation = {
  createProduct: async (_, { name, category, quantity }, { client }) => {
    if (isEmpty(name)) {
      throw new ApolloError('Enter valid name 😢!');
    }
    if (name[0] === ' ') {
      throw new ApolloError('Enter valid name 😢!');
    }

    const [product] = await client.createProduct({ name, category, quantity });
    return{
      ...product
    }
  },
};
