import express from 'express';
const router = express.Router();

// will call controller func
router.post('/create-user', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;