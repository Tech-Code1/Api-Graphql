import bcrypt from 'bcrypt'
import { IResolvers } from 'graphql-tools'
import { Student, Teacher } from './../models'
import { IStudent } from '../interfaces/IStudent'
import { ITeacher } from '../interfaces/ITeacher'

export const studentMutation: IResolvers = {
  //Mutation Student Register
  Mutation: {
    studentRegister: async (
      root: any,
      { input }: { input: IStudent },
      context: any,
      info: any
    ) => {
      const { email, password } = input
      const StudentExist = await Student.findOne({ email })

      if (StudentExist) {
        throw new Error('Este Correo Ya esta Registrado')
      }

      const salt = await bcrypt.genSalt(10)
      input.password = await bcrypt.hash(password, salt)

      if (input.rol == 'Estudiante') {
        const student = new Student(input)
        student.save()
        return student
      }
      //ToDo: not auth

      //validation
    }
  }
}

export const teacherMutation: IResolvers = {
  //Mutation Teacher Register
  Mutation: {
    teacherRegister: async (
      root: any,
      { input }: { input: ITeacher },
      context: any,
      info: any
    ) => {
      const { email, password } = input
      const TeacherExist = await Teacher.findOne({ email })

      if (TeacherExist) {
        throw new Error('Este Correo Ya esta Registrado')
      }

      const salt = await bcrypt.genSalt(10)
      input.password = await bcrypt.hash(password, salt)

      if (input.rol == 'Estudiante') {
        const teacher = new Student(input)
        teacher.save()
        return teacher
      }
      //ToDo: not auth

      //validation
    }
  }
}
