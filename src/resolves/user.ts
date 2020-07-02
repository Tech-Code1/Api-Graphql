import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Context } from 'vm'
import User from '../models/User'
import { argsToArgsConfig } from 'graphql/type/definition'

export default {
  Query: {
    users: (root: any, args: any, context: Context, info: any) => {
      //ToDo: auth, projection, pagination, sanitization

      return User.find({})
    },
    user: (
      root: any,
      { id }: { id: string },
      args: any,
      context: Context,
      info: any
    ) => {
      //ToDo: auth, projection, sanitization

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid user ID.`)
      }

      return User.findById(id)
    }
  },
  Mutation: {
    newUser: (root: any, args: any, context: Context, info: any) => {
      //ToDo: not auth

      // validation

      return User.create(args)
    }
  }
}
