import mongoose from 'mongoose'
const User = require('../models/User')
import bcrypt from 'bcryptjs'
//Resolvers

export const resolvers = {
  Query: {
    getUser: () => User
  },

  Mutation: {
    newUser: async (_: any, { input }: { input: any }) => {
      const { email, password } = input

      // Revisar si el usuario ya esta registrado
      const existingUser = await User.findOne({ email })
      if (existingUser) {
        throw new Error('El usuario ya esta registrado')
      }

      // Hashear su password
      const salt = await bcrypt.genSalt(10)
      input.password = await bcrypt.hash(password, salt)

      // Guardarlo en la base de datos
      try {
        const user = new User(input)
        user.save() //guardarlo
        return user
      } catch (error) {
        console.log(error)
      }
    }
  }
}

/* Mutation: {
  createModel: async (
    _: any,
    { input }: { input: iCreateModelInput },
    { models }: { models: iModels }
  ): Promise<iModel> => {
    const newModel = await models.Model.create({ ...input }) */
