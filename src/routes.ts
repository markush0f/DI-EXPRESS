import { Router, Request, Response } from 'express';
import { makeInvoker, makeClassInvoker } from 'awilix-express';
import { container } from './container';
import { UserController } from './controllers/userController';

const router = Router();
const userController = makeClassInvoker(UserController);

router.get('/users', userController('getUsers'));

export { router };
 