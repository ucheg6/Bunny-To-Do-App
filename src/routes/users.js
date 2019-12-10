import { Router } from 'express';
import Users from '../controllers/users';

const router = new Router();

router.post('/user', Users.createUser);
router.delete('/user/:id', Users.deleteUser);
router.put('/user/:id', Users.updateUser);
router.get('/users', Users.listUsers);


export default router;
