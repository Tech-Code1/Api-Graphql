import GMR from 'graphql-merge-resolvers'
import mStudent from './'
import mTeacher from './'
import mUser from './'

const resolversMutation = GMR.merge([mStudent, mTeacher, mUser])

export default resolversMutation
