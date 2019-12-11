import { Router } from 'express';
import Task from '../controllers/tasks';
import isAuthenticated from '../utilities/auth';
const router = new Router();

router.post('/task', isAuthenticated, Task.createTasks);
router.get('/tasks/:id', isAuthenticated, Task.listUserTasks);
router.put('/tasks/:id', isAuthenticated, Task.updateTask);

export default router;
