import GMR from 'graphql-merge-resolvers'
import studenQuery from '../query'
import teacherQuery from '../query'
import usersQuery from '../query'
import tokenQuery from '../query'

const resolversQuery = GMR.merge([
  studenQuery,
  teacherQuery,
  usersQuery,
  tokenQuery
])

export default resolversQuery
