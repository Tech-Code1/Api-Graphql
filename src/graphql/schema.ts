import { makeExecutableSchema } from 'apollo-server-express'
import typeDefs from './types-defs/type-defs'
import resolvers from './resolvers/users'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
