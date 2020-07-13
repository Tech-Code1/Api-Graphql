import jwt, { Secret } from 'jsonwebtoken'
import mongoose from 'mongoose'
import { IResolvers } from 'graphql-tools'
import { User } from '../../models'
import { UserInputError } from 'apollo-server-express'
import { IUser, IToken } from '../../interfaces/IUser'
require('dotenv').config({ path: 'variables.env' })

//getUser

export const tokenQuery: IResolvers = {
  Query: {
    getUser: async (
      root: any,
      { token }: { token: string },
      context: any,
      info: any
    ) => {
      const userId = await jwt.verify(token, process.env.Secret || '')
      return userId
    }
  }
}
