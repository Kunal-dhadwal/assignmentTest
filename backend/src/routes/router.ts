import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser, sortUsers } from '../controller/user.controller';

const router = express.Router();

// CRUD 
router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/users/sort', sortUsers);

export default router;
