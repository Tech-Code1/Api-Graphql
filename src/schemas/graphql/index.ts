//Merge grapql format
import 'graphql-import-node'

// import typeDefs from './schema.graphql
import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './../../resolvers/resolverMap'

import { mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

const typeDefs = mergeTypeDefs(loadFilesSync(`${__dirname}/**/*.graphql`))

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})
