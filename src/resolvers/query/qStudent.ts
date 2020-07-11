import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { IResolvers } from 'graphql-tools'
import { Student, Teacher, Users } from '../../models'
import { UserInputError } from 'apollo-server-express'
import { IUser, IToken } from '../../interfaces/IUser'
require('dotenv').config({ path: 'variables.env' })

export const studentQuery: IResolvers = {
  //Query Student
  Query: {
    getStudent: (root: any, args: any, context: any, info: any) => {
      // ToDo: auth, projection, pagination, sanitization

      return Student.find({})
    }
  }
}
