import Rol, { RolModelStatic } from './rol'
import User, { UserModelStatic } from './users'

export default {
  User,
  Rol
}

export interface ModelType {
  User: UserModelStatic
  Rol: RolModelStatic
}
