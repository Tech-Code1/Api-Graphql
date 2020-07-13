import mongoose from 'mongoose'
import { IResolvers } from 'graphql-tools'
import { User } from '../../models'
import { UserInputError } from 'apollo-server-express'
import { IUser } from '../../interfaces/IUser'
require('dotenv').config({ path: 'variables.env' })

export const usersQuery: IResolvers = {
  //Query User By Rol
  Query: {
    UsersByRol: (root: any, { rol }: any, context: any, info: any) => {
      // ToDo: auth, projection, pagination, sanitization

      return User.find({ rol })
    },

    ////////////////////////////////////////////

    //Query User By Name
    usersByName: (
      root: any,
      { firstName, lastName }: IUser,
      context: any,
      info: any
    ) => {
      // ToDo: auth, projection, pagination, sanitization
      return User.find({ firstName, lastName })
    },

    ////////////////////////////////////////////

    //Query User By Id
    usersById: (root: any, { id }: any, context: any, info: any) => {
      //ToDo: auth, projection, sanitization

      if (mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid user ID.`)
      }

      return User.findById(id)
    }

    ////////////////////////////////////////////
  }
}
