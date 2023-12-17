import { Request, Response } from 'express';
import { UserServices } from './user.service';
// import studentValidationSchema from './student.validation';
// import studentValidationSchema from './student.joi.validation';
// const Joi = require('joi');
// Zod

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    // Data validation using Joi starts
    // const { error, value } = studentValidationSchema.validate(studentData);
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   });
    // }

    // const result = await StudentServices.createStudentIntoDB(value);
    // Data validation using Joi end

    // Data validation using Zod starts
    // const zodParsedData = studentValidationSchema.parse(studentData);
    // const result = await StudentServices.createStudentIntoDB(zodParsedData);
    // Data validation using Zod end

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
      message: 'Users fetched successfully!',
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
      message: 'User fetched successfully!',
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
