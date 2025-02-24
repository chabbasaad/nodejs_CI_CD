class UserDatabase {
    constructor() {
        this.users = [];
        this.nextId = 1;
    }

    saveUser(firstname, lastname, email) {
        if (!firstname?.trim()) throw new Error('First name is required');
        if (!lastname?.trim()) throw new Error('Last name is required');
        if (!email?.trim()) throw new Error('Email is required');

        const user = {
            id: this.nextId++,
            firstname: firstname.trim(),
            lastname: lastname.trim(),
            email: email.trim(),
            createdAt: new Date()
        };

        this.users.push(user);
        return user;
    }

    getAllUsers() {
        return this.users;
    }

    clearUsers() {
        this.users = [];
        this.nextId = 1;
    }
}

module.exports = UserDatabase; 