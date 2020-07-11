import jwt, { Secret } from 'jsonwebtoken'
import GetPublicKeyOrSecret from 'jsonwebtoken'
import mongoose from 'mongoose'
import { IResolvers } from 'graphql-tools'
import { Student, Teacher, Users } from '../../models'
import { UserInputError } from 'apollo-server-express'
import { IUser, IToken } from '../../interfaces/IUser'
require('dotenv').config({ path: 'variables.env' })

//getUser

/* export const tokenQuery: IResolvers = {
  getUser: async (root: any, { token }: any, context: any, info: any) => {
    const userId: any = await jwt.verify(token, process.env.SECRETWORD || '')

    return userId
  }
} */
