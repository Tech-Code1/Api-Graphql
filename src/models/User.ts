import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      select: true
    },
    dateOfBirth: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    genre: {
      type: String,
      required: true,
      enum: ['Hombre', 'Mujer']
    },
    chooseYourRole: {
      type: String,
      required: true,
      enum: ['Profesor', 'Estudiante']
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('User', userSchema)
