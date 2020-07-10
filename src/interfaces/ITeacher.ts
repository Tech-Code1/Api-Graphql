import { Document } from 'mongoose'

export interface ITeacher extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
  dateOfBirth: string
  genre: string
  rol: string
}
