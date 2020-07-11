import bcrypt from 'bcrypt'
import { IResolvers } from 'graphql-tools'
import { Student, Teacher, Users } from '../../models'
import jwt from 'jsonwebtoken'
import { IStudent } from '../../interfaces/IStudent'
import { ITeacher } from '../../interfaces/ITeacher'
import { IUser } from '../../interfaces/IUser'
import { isBuffer } from 'util'
require('dotenv').config({ path: 'variables.env' })

const createToken = (user: IUser, SECRETWORD: any, expiresIn: any) => {
  /* console.log(user) */
  const {
    id,
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
    genre,
    rol
  } = user

  return jwt.sign({ id, firstName, lastName, email, password }, SECRETWORD, {
    expiresIn
  })
}

export const tokenUserMutation: IResolvers = {
  //Validation
  Mutation: {
    authenticateUser: async (
      root: any,
      { input }: { input: IUser },
      context: any,
      info: any
    ) => {
      const { email, password } = input

      //If the user already exists
      const StudentExist = await Student.findOne({ email })
      const TeacherExist = await Teacher.findOne({ email })
      if (!StudentExist && !TeacherExist) {
        throw new Error('El usuario no existe')
      }

      //Check if the password is correct

      const passwordStudentCorrect = await bcrypt.compare(
        password,
        StudentExist.password
      )

      const passwordTeacherCorrect = await bcrypt.compare(
        password,
        TeacherExist.password
      )

      if (!passwordStudentCorrect || passwordTeacherCorrect) {
        throw new Error('El password es incorrecto')
      }
      //create the token
      return {
        token: createToken(
          StudentExist || TeacherExist,
          process.env.SECRETWORD,
          '24'
        )
      }
    }
  }
}
