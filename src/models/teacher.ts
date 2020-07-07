import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { IUser } from '../interfaces/IUser'
import { ITeacher } from '../interfaces/ITeacher'

const teacherSchema = new mongoose.Schema(
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
      required: true,
      unique: true
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
      required: true
    },
    rol: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

teacherSchema.pre<ITeacher>('save', async function (next) {
  const teacher = this
  if (this.isModified('password')) {
    try {
      teacher.password = await bcrypt.hash(teacher.password, 10)
      next()
    } catch (err) {
      next(err)
    }
  }
  next()
})

export default mongoose.model('Teacher', teacherSchema)
