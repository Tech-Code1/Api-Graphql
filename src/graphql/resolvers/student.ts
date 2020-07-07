import { IResolvers } from 'graphql-tools'
import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Student } from '../../models'

export const studentResolver: IResolvers = {
  Query: {
    getStudent: (root: any, args: any, context: any, info: any) => {
      // ToDo: auth, projection, pagination, sanitization

      return Student.find({})
    }
  },

  Mutation: {
    studentRegister: (root: any, args: any, context: any, info: any) => {
      //ToDo: not auth

      //validation

      return Student.create(args)
    }
  }
}
