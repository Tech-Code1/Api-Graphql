import GMR from 'graphql-merge-resolvers'
import { registerTeacherMutation } from './mTeacher'
import { registerStudentMutation } from './mStudent'
import { tokenUserMutation } from './mUser'

const resolversMutation = GMR.merge([
  registerTeacherMutation,
  registerStudentMutation,
  tokenUserMutation
])

export default resolversMutation
