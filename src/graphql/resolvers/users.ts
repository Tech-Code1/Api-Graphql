import { IResolvers } from 'graphql-tools'
import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Users } from '../../models'

export const userResolver: IResolvers = {
  Query: {
    UsersByRol: (root: any, { rol }: any, context: any, info: any) => {
      // ToDo: auth, projection, pagination, sanitization

      return Users.find({ rol })
    },

    usersByName: (
      root: any,
      { firstName, lastName }: any,
      context: any,
      info: any
    ) => {
      // ToDo: auth, projection, pagination, sanitization
      return Users.find({ firstName, lastName })
    },

    usersById: (root: any, { id }: any, context: any, info: any) => {
      //ToDo: auth, projection, sanitization

      if (mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid user ID.`)
      }

      return Users.findById(id)
    }
  }
}
