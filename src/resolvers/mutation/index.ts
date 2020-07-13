import GMR from 'graphql-merge-resolvers'

import { tokenUserMutation } from './mToken'
import { registerUsertMutation } from './mUser'

const resolversMutation = GMR.merge([tokenUserMutation, registerUsertMutation])

export default resolversMutation
