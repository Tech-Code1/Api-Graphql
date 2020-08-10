import ModelType from '../../models'
import { IResolvers } from 'graphql-tools'
import User from '../../models'
import { UserInputError } from 'apollo-server-express'
import { IUser } from '../../interfaces/IUser'
require('dotenv').config({ path: 'variables.env' })

export const usersQuery: IResolvers = {
  Query: {
    //Query User By Name
    usersByName: (
      root: any,
      { firstName, lastName }: IUser,
      context: any,
      info: any
    ) => {
      // ToDo: auth, projection, pagination, sanitization
      return ModelType.User.findOne({ where: { firstName, lastName } })
    }

    ////////////////////////////////////////////
  }
}
