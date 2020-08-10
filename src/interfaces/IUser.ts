import { Model } from 'sequelize'

export interface IUser extends Model {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
}
export interface IStudent extends Model {
  id: string
  rol: string
}
export interface ITeacher extends Model {
  id: string
  rol: string
}

export interface IToken extends Document {
  token: string
}
