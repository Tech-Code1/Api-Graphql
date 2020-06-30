import { gql } from 'apollo-server'

//schema
export const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    dateOfBirth: String
    genre: String
    chooseYourRole: String
    createdAt: String
    updateAt: String
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String
    password: String
    dateOfBirth: String
    genre: String
    chooseYourRole: String
  }

  type Query {
    getUser: String
  }

  type Mutation {
    newUser(input: UserInput): String
  }
`
