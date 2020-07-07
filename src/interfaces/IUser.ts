import mongoose from 'mongoose'

export interface IUser extends mongoose.Document {
  firstName: string
  lastName: string
  email: string
  password: string
  dateOfBirth: string
  genre: string
  chooseYourRole: string
}
