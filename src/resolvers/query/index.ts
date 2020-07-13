import GMR from 'graphql-merge-resolvers'
import usersQuery from '../query'
import tokenQuery from '../query'

const resolversQuery = GMR.merge([usersQuery, tokenQuery])

export default resolversQuery
