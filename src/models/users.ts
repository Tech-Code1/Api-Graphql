import bcrypt, { hash } from 'bcrypt'
import { BuildOptions, Sequelize, DataTypes, Model } from 'sequelize'
import { IUser } from '../interfaces/IUser'
const sequelize = new Sequelize('Mysql::memory', {
  define: {
    freezeTableName: true
  }
})

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    firstName: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },

  {
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    freezeTableName: true, // The name same the table

    //Encrypt password
    hooks: {
      beforeCreate: (User: IUser) => {
        const salt = bcrypt.genSaltSync(10)
        User.password = bcrypt.hashSync(User.password, salt)
      }
    }
  }
)

/* User.beforeCreate((user, options ) => {
    return bcrypt
      .hash(user.password, 10)
      .then(hash => {
        User.password = hash
      })
      .catch(err => {
        throw new Error()
      })
  }) */

/*  const salt = await bcrypt.genSalt(10)
      input.password = await bcrypt.hash(password, salt)
 */
console.log(User === sequelize.models.User) // true

export type UserModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): User
}

export default User as UserModelStatic
