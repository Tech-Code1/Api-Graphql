//Merges
import { GraphQLSchema } from 'graphql'
import { mergeSchemas } from 'graphql-tools'
import 'graphql-import-node'

//Schemas
import users from './../graphql/schemas/users.graphql'
import student from './../graphql/schemas/student.graphql'
import teacher from './../graphql/schemas/teacher.graphql'

//Resolvers
import { teacherResolver } from './resolvers/teacher'
import { studentResolver } from './resolvers/student'
import { userResolver } from './resolvers/users'

export const schema: GraphQLSchema = mergeSchemas({
  schemas: [users, student, teacher],
  resolvers: [userResolver, teacherResolver, studentResolver]
})
