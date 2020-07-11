import GMR from 'graphql-merge-resolvers'
import studenQuery from '../query'
import teacherQuery from '../query'
import usersQuery from '../query'

const resolversQuery = GMR.merge([studenQuery, teacherQuery, usersQuery])

export default resolversQuery
