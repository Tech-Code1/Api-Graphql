import bcrypt from 'bcrypt'
import { IResolvers } from 'graphql-tools'
import { User } from '../../models'
import { IUser } from '../../interfaces/IUser'
require('dotenv').config({ path: 'variables.env' })

export const registerUsertMutation: IResolvers = {
  //Mutation Student Register
  Mutation: {
    userRegister: async (
      root: any,
      { input }: { input: IUser },
      context: any,
      info: any
    ) => {
      //check if the user is already registered
      const { email, password } = input
      const UserExist = await User.findOne({ email })

      if (UserExist) {
        throw new Error('Este correo ya esta registrado')
      }

      //Encrypt password
      const salt = await bcrypt.genSalt(10)
      input.password = await bcrypt.hash(password, salt)

      try {
        //Save Teacher in the database
        if (input.rol == 'ESTUDIANTE') {
          const student = new User(input)
          student.save()
          return student
        }
        if (input.rol == 'PROFESOR') {
          const teacher = new User(input)
          teacher.save()
          return teacher
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
