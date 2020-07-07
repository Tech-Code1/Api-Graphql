import mongoose from 'mongoose'

export interface IStudent extends mongoose.Document {
  firstName: string
  lastName: string
  email: string
  password: string
  dateOfBirth: string
  genre: string
  chooseYourRole: string
}
