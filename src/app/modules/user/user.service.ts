import { UserModel } from '../user.model';
import { User } from './user.interface';

const createUserIntoDB = async (userData: User) => {
  // 1. static mathod
  const result = await UserModel.create(userData);

  // 2. Instance method. we can use any of those
  // const student = new StudentModel(studentData);
  // const result = await student.save();

  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};
const getSingleUserFromDB = async (id: string) => {
  const result = await UserModel.findOne({ id });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
