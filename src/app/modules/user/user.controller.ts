import { Request, Response } from 'express';
import { UserServices } from './user.service';


const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    // will call service func to send this data
    const result = await UserServices.createUserIntoDB(userData);

    // send response
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'All Users data are retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await UserServices.getSingleUserFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single User data is retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
};
