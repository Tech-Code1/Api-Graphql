import { BuildOptions, Sequelize, DataTypes, Model } from 'sequelize'
const sequelize = new Sequelize('Mysql::memory', {
  define: {
    freezeTableName: true
  }
})

class Teacher extends Model {}
Teacher.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'teacher' // We need to choose the model name
  }
)

console.log(Teacher === sequelize.models.Teacher) // true

export type TeacherModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Teacher
}

export default Teacher as TeacherModelStatic
