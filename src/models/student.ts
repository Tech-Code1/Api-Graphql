import { BuildOptions, Sequelize, DataTypes, Model } from 'sequelize'
const sequelize = new Sequelize('Mysql::memory', {
  define: {
    freezeTableName: true
  }
})

class Student extends Model {}
Student.init(
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
    modelName: 'student' // We need to choose the model name
  }
)

console.log(Student === sequelize.models.Student) // true

export type StudentModelStatic = typeof Model & {
  new (values?: Record<string, unknown>, options?: BuildOptions): Student
}

export default Student as StudentModelStatic
