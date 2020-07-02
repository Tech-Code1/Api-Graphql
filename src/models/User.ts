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
      trim: true,
      required: true
    },
    email: {
      type: String,
      trim: true,
      required: true
    },
    password: {
      type: String,
      select: true,
      required: true
    },
    dateOfBirth: {
      type: String,
      trim: true,
      lowercase: true,
      required: true
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
