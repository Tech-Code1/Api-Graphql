import mysql, { PoolConnection, MysqlError } from 'mysql'
import { promisify } from 'util'

const { database } = require('./keys')

const pool: mysql.Pool = mysql.createPool(database)

pool.getConnection((err: MysqlError, connection: PoolConnection) => {
  if (err) {
    if (err.code === 'Protocol_connection_lost') {
      console.error('Database connection was closed')
    }
    if (err.code === 'ER_CON_COUNT ERROR') {
      console.error('Database has to manny intents connections')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused')
    }
  }

  if (connection) connection.release()
  console.log('DB is connected')
  return
})

//Primisify conver promess to callbacks for querys
/* pool.query = promisify(pool.query) */

export default pool
