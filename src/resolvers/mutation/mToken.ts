import bcrypt from 'bcrypt'
import ModelType from '../../models'
import { IResolvers } from 'graphql-tools'
import User from '../../models'
import jwt from 'jsonwebtoken'
import { IUser, IToken } from '../../interfaces/IUser'
require('dotenv').config({ path: 'variables.env' })

const createToken = (user: IUser, SECRET: any, expiresIn: any) => {
  /* console.log(user) */
  const { id, firstName, lastName, email, password } = user

  return jwt.sign({ id, firstName, lastName, email, password }, SECRET, {
    expiresIn
  })
}

export const tokenUserMutation: IResolvers = {
  //get user by token
  Query: {
    getUser: async (
      root: any,
      { token }: { token: string },
      context: any,
      info: any
    ) => {
      const userId = await jwt.verify(token, process.env.Secret || 'test token')

      return userId
    }
  },
  //Validation
  Mutation: {
    authenticateUser: async (
      root: any,
      { input }: { input: IUser },
      context: any,
      info: any
    ) => {
      const { email, password } = input

      //If the user already exists
      const UserExist = await ModelType.User.findOne({ where: { email } })
      if (!UserExist) {
        throw new Error('El usuario no existe')
      }

      //Check if the password is correct
      const passwordCorrect = await bcrypt.compare(password, input.password)
      if (!passwordCorrect) {
        throw new Error('El password es incorrecto')
      }
      //create the token
      return {
        token: createToken(input, process.env.SECRET, '24h')
      }
    }
  }
}
