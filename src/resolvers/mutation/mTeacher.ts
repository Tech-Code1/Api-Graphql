import bcrypt from 'bcrypt'
import { IResolvers } from 'graphql-tools'
import { Student, Teacher, Users } from '../../models'
import jwt from 'jsonwebtoken'
import { IStudent } from '../../interfaces/IStudent'
import { ITeacher } from '../../interfaces/ITeacher'
import { IUser } from '../../interfaces/IUser'
require('dotenv').config({ path: 'variables.env' })

export const registerTeacherMutation: IResolvers = {
  //Mutation Teacher Register
  Mutation: {
    teacherRegister: async (
      root: any,
      { input }: { input: IUser },
      context: any,
      info: any
    ) => {
      //check if the user is already registered
      const { email, password } = input
      const TeacherExist = await Teacher.findOne({ email })

      if (TeacherExist) {
        throw new Error('Este Correo Ya esta Registrado')
      }

      //Encrypt password
      const salt = await bcrypt.genSalt(10)
      input.password = await bcrypt.hash(password, salt)

      try {
        //Save Teacher in the database
        if (input.rol == 'PROFESOR') {
          const Profesor = new Teacher(input)
          Profesor.save()
          return Profesor
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
