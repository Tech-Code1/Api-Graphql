import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { IUser } from '../interfaces/IUser'
import { IStudent } from '../interfaces/IStudent'

const studentSchema = new mongoose.Schema(
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

studentSchema.pre<IStudent>('save', async function (next) {
  const student = this
  if (this.isModified('password')) {
    try {
      student.password = await bcrypt.hash(student.password, 10)
      next()
    } catch (err) {
      next(err)
    }
  }
  next()
})

export default mongoose.model('Student', studentSchema)
