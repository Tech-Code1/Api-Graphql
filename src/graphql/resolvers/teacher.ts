import { IResolvers } from 'graphql-tools'
import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Teacher } from '../../models'

export const teacherResolver: IResolvers = {
  Query: {
    getTeacher: (root: any, args: any, context: any, info: any) => {
      // ToDo: auth, projection, pagination, sanitization

      return Teacher.find({})
    }
  },

  Mutation: {
    teacherRegister: (root: any, args: any, context: any, info: any) => {
      //ToDo: not auth

      //validation

      return Teacher.create(args)
    }
  }
}
