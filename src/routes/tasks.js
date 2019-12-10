import { Router } from 'express';
import Task from '../controllers/tasks';

const router = new Router();

router.post('/task', Task.createTasks);
export default router;
