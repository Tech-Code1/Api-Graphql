import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { IResolvers } from 'graphql-tools'
import { Student, Teacher, Users } from '../../models'
import { UserInputError } from 'apollo-server-express'
import { IUser, IToken } from '../../interfaces/IUser'
require('dotenv').config({ path: 'variables.env' })

export const teacherQuery: IResolvers = {
  //Query Teacher
  Query: {
    getTeacher: (root: any, args: any, context: any, info: any) => {
      // ToDo: auth, projection, pagination, sanitization

      return Teacher.find({})
    }
  }
}
