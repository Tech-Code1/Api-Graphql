import connection from './config/db'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { schema } from './schemas/graphql'
import depthLimit from 'graphql-depth-limit'

//Initalize the App(Express)
const app = express()

//body-parser
/* app.use(bodyParser.json()) */

//connect to the data base
// Inicializamos el servidor de Apollo
const server = new ApolloServer({
  schema,
  introspection: true, // Necesario
  context: async () => {
    return { connection }
  }
})

//Middlewar Graphql
server.applyMiddleware({ app })

const PORT = 4000

//arracncar el servidor
app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}/graphql`)
})
