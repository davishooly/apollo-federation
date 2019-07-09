import { gql } from 'apollo-server';

export const typeDefs = gql`
  
  extend type Query {
      product(id: ID!, name: String!): Product
  }
  
  extend type Mutation {
      createProduct(name: String!, category: String!, quantity: Int!):Product
      updateProduct(id: ID!, name: String!): Product
      deleteProduct(id: ID!): Product
  }
  
  type Product {
      name: String!
      category: String!
      quantity: Int
  }
`;
