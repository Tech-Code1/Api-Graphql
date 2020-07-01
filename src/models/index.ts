import { ApolloServer } from 'apollo-server'
import 'reflect-metadata'
import { typeDefs } from '../graphql/Resolvers/types/schema'
import { resolvers } from '../resolves/resolvers'
import { conectarDB } from '../config/db'

//Conectar a la base de datos
conectarDB()

//servidor
const server = new ApolloServer({
  typeDefs,
  resolvers
})

//arrancar el servidor

server.listen().then(({ url }) => {
  console.log(`servidor listo en la URL ${url}`)
})
