//Merge grapql format
import 'graphql-import-node'

// import typeDefs from './schema.graphql
import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './../../resolvers/resolverMap'

import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

const typeDefs = mergeTypes(fileLoader(`${__dirname}/**/*.graphql`), {
  all: true
})

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})
