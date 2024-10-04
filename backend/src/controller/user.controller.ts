import { Request, Response } from 'express';
import { User } from '../model/user';

let users: User[] = [];
let nextId = 1;

// POST /api/users
export const createUser = (req: Request, res: Response):any => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newUser = { id: nextId++, name, email, age };
  users.push(newUser);

  res.status(201).json(newUser);
};

// GET /api/users
export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

// GET /api/users/:id
export const getUserById = (req: Request, res: Response):any     => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json(user);
};

// PUT /api/users/:id
export const updateUser = (req: Request, res: Response):any => {
  const userId = parseInt(req.params.id);
  const { name, email, age } = req.body;

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (name) user.name = name;
  if (email) user.email = email;
  if (age) user.age = age;

  res.json(user);
};

export const deleteUser = (req: Request, res: Response):any => {
  const userId = parseInt(req.params.id);
  users = users.filter((u) => u.id !== userId);

  res.status(204).send("Deleted userid:"+" "+userId);
};



