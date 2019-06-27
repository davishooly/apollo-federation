import { gql } from 'apollo-server';

export const typeDefs = gql`
   
  type Query {
      customer: Customer,
      login(username:String, password: String): Customer
      admin: AdminUser
  }
  
  type Mutation {
      createCustomer(username: String!, email: String!, password: String!): Customer,
      createAdmin(username: String!, email: String!, password: String! ): AdminUser
  }
  
  interface User {
      id: ID!
      username: String!
      email: String,
      token: String
  }
  
  type Customer implements User {
      id: ID!
      username: String!
      email: String
      token: String
  }
  
  type AdminUser implements User {
      id: ID!
      username: String!
      email: String,
      token: String
  }
`;
