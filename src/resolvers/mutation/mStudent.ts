import bcrypt from 'bcrypt'
import { IResolvers } from 'graphql-tools'
import { Student, Teacher, Users } from '../../models'
import jwt from 'jsonwebtoken'
import { IStudent } from '../../interfaces/IStudent'
import { ITeacher } from '../../interfaces/ITeacher'
import { IUser } from '../../interfaces/IUser'
require('dotenv').config({ path: 'variables.env' })

export const registerStudentMutation: IResolvers = {
  //Mutation Student Register
  Mutation: {
    studentRegister: async (
      root: any,
      { input }: { input: IUser },
      context: any,
      info: any
    ) => {
      //check if the user is already registered
      const { email, password } = input
      const StudentExist = await Student.findOne({ email })

      if (StudentExist) {
        throw new Error('Este correo ya esta registrado')
      }

      //Encrypt password
      const salt = await bcrypt.genSalt(10)
      input.password = await bcrypt.hash(password, salt)

      try {
        //Save Teacher in the database
        if (input.rol == 'ESTUDIANTE') {
          const student = new Student(input)
          student.save()
          return student
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
