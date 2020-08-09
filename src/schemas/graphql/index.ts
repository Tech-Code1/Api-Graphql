import { GraphQLSchema } from 'graphql'
import 'graphql-import-node'
import resolvers from './../../resolvers/resolverMap'
import { makeExecutableSchema } from 'graphql-tools'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
const loadedFiles = loadFilesSync(`${__dirname}/**/*.graphql`)
const typeDefs = mergeTypeDefs(loadedFiles)

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})
