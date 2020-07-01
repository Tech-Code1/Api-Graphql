//Interfaces
/* import { iCreateUserInput } from '../../interfaces' */

//Resolvers

export const resolvers = {
  Query: {
    getUser: () => 'User'
  },

  Mutation: {
    newUser: (_: object, { input }: { input: object }) => {
      console.log(input)
      return 'Creando...'
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
