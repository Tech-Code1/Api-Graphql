import { IResolvers } from 'graphql-tools'
import { usersQuery, teacherQuery, studentQuery } from './query'
import { studentMutation, teacherMutation } from './mutation'

const resolversMap: IResolvers = {
  ...usersQuery,
  ...teacherQuery,
  ...studentQuery,
  ...studentMutation,
  ...teacherMutation
}

export default resolversMap
