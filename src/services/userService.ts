import { UserRepository } from '../repositories/userRepository';

interface UserServiceDependencies {
    userRepository: UserRepository;
}

export class UserService {
    private userRepository: UserRepository;

    constructor({ userRepository }: UserServiceDependencies) {
        this.userRepository = userRepository;
    }

    getUsers(): { id: number, name: string }[] {
        return this.userRepository.getAllUsers();
    }

    getUser(id: number): { id: number, name: string } | undefined {
        return this.userRepository.getUserById(id);
    }
}
