import { ApolloServer } from 'apollo-server'
import 'reflect-metadata'
import { typeDefs } from './interfaces/schema'
import { resolvers } from '../src/db/resolvers'
import { conectarDB } from '../src/config/db'

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
