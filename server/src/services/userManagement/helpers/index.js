import { UserInputError } from 'apollo-server';
import isEmail from 'validator/lib/isEmail';

export const validateFields = ({ email, password }) => {
  if (password.length < 8) {
    throw new UserInputError('Invalid! password must be more than eight characters 😢');
  }
  if (!isEmail(email)) {
    throw new UserInputError('Incorrect email format! 😢');
  }
};
