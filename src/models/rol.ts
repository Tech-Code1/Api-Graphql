import { BuildOptions, Sequelize, DataTypes, Model } from 'sequelize'
const sequelize = new Sequelize('Mysql::memory', {
  define: {
    freezeTableName: true
  }
})

class Rol extends Model {}
Rol.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    rol: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
  }
)

console.log(Rol === sequelize.models.Rol) // true

export type RolModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Rol
}

export default Rol as RolModelStatic
