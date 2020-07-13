import bcrypt from 'bcrypt'
import { IResolvers } from 'graphql-tools'
import { User } from '../../models'
import jwt from 'jsonwebtoken'
import { IUser } from '../../interfaces/IUser'
require('dotenv').config({ path: 'variables.env' })

const createToken = (user: IUser, SECRET: any, expiresIn: any) => {
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

  return jwt.sign({ id, firstName, lastName, email, password }, SECRET, {
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
      const UserExist = await User.findOne({ email })
      if (!UserExist) {
        throw new Error('El usuario no existe')
      }

      //Check if the password is correct
      const passwordCorrect = await bcrypt.compare(password, UserExist.password)
      if (!passwordCorrect) {
        throw new Error('El password es incorrecto')
      }
      //create the token
      return {
        token: createToken(UserExist, process.env.SECRET, '24')
      }
    }
  }
}
