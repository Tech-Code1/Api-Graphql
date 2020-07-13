import GMR from 'graphql-merge-resolvers'
import usersQuery from '../query'

const resolversQuery = GMR.merge([usersQuery])

export default resolversQuery
