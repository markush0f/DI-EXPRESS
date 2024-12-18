import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { AuthService } from '../services/authService';
import { LoggerService } from '../services/loggerService';


interface UserControllerDependencies {
    userService: UserService;
    authService: AuthService;
    loggerService: LoggerService;
}

export class UserController {
    private userService: UserService;
    private authService: AuthService;
    private loggerService: LoggerService;

    constructor({ userService, authService, loggerService }: UserControllerDependencies) {
        this.userService = userService;
        this.authService = authService;
        this.loggerService = loggerService;
    }

    getUsers = (req: Request, res: Response): void => {
        if (this.authService.authenticate()) {
            const users = this.userService.getUsers();
            this.loggerService.log('Users fetched successfully.');
            res.json(users);
        } else {
            res.status(401).send('Unauthorized');
        }
    };

    getUser = (req: Request, res: Response): void => {
        if (this.authService.authenticate()) {
            const user = this.userService.getUser(Number(req.params.id));
            if (user) {
                this.loggerService.log(`User with id ${req.params.id} fetched successfully.`);
                res.json(user);
            } else {
                res.status(404).send('User not found');
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    };
}
