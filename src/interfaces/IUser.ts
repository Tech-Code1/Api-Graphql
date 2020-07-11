import { Document } from 'mongoose'

export interface IUser extends Document {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  dateOfBirth: string
  genre: string
  rol: string
}

export interface IToken extends Document {
  token: string
}
