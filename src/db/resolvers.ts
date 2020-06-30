//Resolvers

export const resolvers = {
  Query: {
    getUser: () => 'User'
  },

  Mutation: {
    newUser: async (_: any, { input }: { input: string }) => {
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
