module.exports = (sequelize: any, DataTypes: any) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    firstName: {
      type: DataTypes.STRING,
      required: true,
      trim: true,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      trim: true,
      required: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      trim: true,
      required: true,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      select: true,
      required: true,
      allowNull: false
    },
    rol: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.STRING
    },
    updatedAt: {
      type: DataTypes.STRING
    }
  })
  User.associate = function (models: any) {
    User.hasMany(models.Post)
  }
  return User
}
