import bcrypt from 'bcrypt'
import { IResolvers } from 'graphql-tools'
import ModelType from '../../models'
import { IUser } from '../../interfaces/IUser'
import { Model, where } from 'sequelize'
import sequelize from 'sequelize'
require('dotenv').config({ path: 'variables.env' })
import User from '../../models'

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
      const { email } = input
      const UserExist = await ModelType.User.findOne({ where: { email } })

      if (UserExist) {
        throw new Error('Este correo ya esta registrado')
      }

      /* const salt = await bcrypt.genSalt(10)
      input.password = await bcrypt.hash(password, salt) */

      try {
        //Save User in the database
        if (input.id == 'Student') {
          const student = new ModelType.User(input)
          student.save()
          return student
        }
        if (input.id == 'Teacher') {
          const teacher = new ModelType.User(input)
          teacher.save()
          return teacher
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
