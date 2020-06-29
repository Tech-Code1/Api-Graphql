export {};
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
      trim: true,
      lowercase: true,
    },
    genre: {
      type: String,
      required: true,
      enum: ["Hombre", "Mujer"],
    },
    chooseYourRole: {
      type: String,
      required: true,
      enum: ["Profesor", "Estudiante"],
    },
  },
  {
    timestamps: true,
  }
);

UsersSchema.methods.encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UsersSchema.methods.matchPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", UsersSchema);
