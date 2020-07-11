import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { IResolvers } from 'graphql-tools'
import { Student, Teacher, Users } from '../../models'
import { UserInputError } from 'apollo-server-express'
import { IUser, IToken } from '../../interfaces/IUser'
require('dotenv').config({ path: 'variables.env' })

export const usersQuery: IResolvers = {
  //Query User By Rol
  Query: {
    UsersByRol: (root: any, { rol }: any, context: any, info: any) => {
      // ToDo: auth, projection, pagination, sanitization

      return Users.find({ rol })
    },

    //Query User By Name
    usersByName: (
      root: any,
      { firstName, lastName }: any,
      context: any,
      info: any
    ) => {
      // ToDo: auth, projection, pagination, sanitization
      return Users.find({ firstName, lastName })
    },

    //Query User By Id
    usersById: (root: any, { id }: any, context: any, info: any) => {
      //ToDo: auth, projection, sanitization

      if (mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid user ID.`)
      }

      return Users.findById(id)
    }

    ////////////////////////////////////////////
    //getUser
    /* getUser: async (root: any, { token }: IToken, context: any, info: any) => {
      const userId = await jwt.verify(token, process.env.SECRET)

      return userId
    } */
  }
}
