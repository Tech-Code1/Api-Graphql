import { Sequelize } from 'sequelize'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { schema } from './schemas/graphql'

//Initalize the App(Express)
const app = express()

//body-parser
/* app.use(bodyParser.json()) */

//connect to the data base
const { database } = require('./keys')
const sequelize = new Sequelize(database, {
  host: 'localhost',
  dialect: 'mysql'
})

// Inicializamos el servidor de Apollo
const server = new ApolloServer({
  schema,
  introspection: true // Necesario
})

//Middlewar Graphql
server.applyMiddleware({ app })

const PORT = 4000

//arracncar el servidor
app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}/graphql`)
})
