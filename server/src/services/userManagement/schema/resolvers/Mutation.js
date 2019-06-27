import { validateFields } from '../../helpers/index';

const Mutation = {
  createCustomer: async (_, { username, email, password }, { client, req, res }) => {
    validateFields({ email, password });
    const { results, ops } = await client.createUser({ username, email, password });
    return {
      ...ops[0],
    };
  },
};

export default Mutation;
