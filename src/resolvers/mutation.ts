import { IResolvers } from 'graphql-tools'
import { Student, Teacher } from './../models'

export const studentMutation: IResolvers = {
  //Mutation Student Register
  Mutation: {
    studentRegister: (root: any, args: any, context: any, info: any) => {
      //ToDo: not auth

      //validation

      return Student.create(args)
    }
  }
}

export const teacherMutation: IResolvers = {
  //Mutation Teacher Register
  Mutation: {
    teacherRegister: (root: any, args: any, context: any, info: any) => {
      //ToDo: not auth

      //validation

      return Teacher.create(args)
    }
  }
}
