import { Router } from 'express';

import taskRouter from './tasks';

const router = Router();

router.use(taskRouter);
export default router;
