import { ApolloServer } from 'apollo-server-express'
import 'reflect-metadata'
import { typeDefs } from '../interfaces/schema'
import { resolvers } from '../resolves/resolvers'
import { conectarDB } from '../config/db'
import express from 'express'
import exphbs from 'express-handlebars'
import path from 'path'

//Importing Routes
import IndexRoutes from '../routers'

//Conectar a la base de datos
conectarDB()

//Initializations
const app = express()

//Settings
app.set('port', process.env.port || 4000)

const server = new ApolloServer({
  typeDefs,
  resolvers
})

//MIddlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
server.applyMiddleware({ app }) //app is from an existing express app

//Routes
app.use('/inicio', IndexRoutes)

//Static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port')),
  () => {
    console.log(`servidor listo en la URL ${app.get('port')}`) //arracncar el servidor
  }
