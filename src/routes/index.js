import { Router } from 'express';

import taskRouter from './tasks';
import userRouter from './users';
const router = Router();

router.use(taskRouter, userRouter);
export default router;
