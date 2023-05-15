import newdb from "../sequelize.js";
import { DataTypes } from "sequelize";

const UserModel = newdb.define(
  'user',
  {
    userId: { type: DataTypes.NUMBER},
    username: { type: DataTypes.STRING },
    mail: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    Admin: { type: DataTypes.BOOLEAN },
  },
  {
    timestamps: false,
  }
);

export default UserModel;