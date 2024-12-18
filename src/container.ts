import { createContainer, asClass } from 'awilix';
import { UserRepository } from './repositories/userRepository';
import { UserService } from './services/userService';
import { UserController } from './controllers/userController';
import { AuthService } from './services/authService';
import { LoggerService } from './services/loggerService';


const container = createContainer();

container.register({
    userRepository: asClass(UserRepository).singleton(),
    userService: asClass(UserService).singleton(),
    authService: asClass(AuthService).singleton(),
    loggerService: asClass(LoggerService).singleton(),
    userController: asClass(UserController).singleton()
});

export { container };
