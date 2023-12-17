import express from 'express';
import { UserControllers } from './user.controller';
const router = express.Router();

// will call controller func
router.post('/users', UserControllers.createUser);
router.get('/users', UserControllers.getAllUsers);
// router.get('/:userId', UserControllers.getSingleUser);

export const UserRoutes = router;
