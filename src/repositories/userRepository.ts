export class UserRepository {
    private users = [
        { id: 1, name: 'User1' },
        { id: 2, name: 'User2' },
        { id: 3, name: 'User3' },
    ];

    getAllUsers() {
        return this.users;
    }

    getUserById(id: number) {
        return this.users.find(user => user.id === id);
    }
}
