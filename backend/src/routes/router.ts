import express from 'express';
import { createUser, getUsers } from '../controller/user.controller';

const router = express.Router();

// CRUD endpoints for users
router.post('/users', createUser);
router.get('/users', getUsers);

export default router;
