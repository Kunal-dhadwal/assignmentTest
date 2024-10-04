import { Request, Response } from 'express';
import { User } from '../model/user';

// In-memory data structure to store users
let users: User[] = [];
let nextId = 1;

// POST /api/users - Create a new user
export const createUser = (req: Request, res: Response):any => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newUser = { id: nextId++, name, email, age };
  users.push(newUser);

  res.status(201).json(newUser);
};

// GET /api/users - Retrieve a list of all user profiles
export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

