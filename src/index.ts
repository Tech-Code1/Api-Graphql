import conectDB from './config/db'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { schema } from './graphql/index'
import depthLimit from 'graphql-depth-limit'

//Initalize the App(Express)
const app = express()

//body-parser
/* app.use(bodyParser.json()) */

//connect to the data base
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(10)]
})

//Middlewar Graphql
server.applyMiddleware({ app })

const PORT = 4000

conectDB()

//arracncar el servidor
app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}/graphql`)
})
