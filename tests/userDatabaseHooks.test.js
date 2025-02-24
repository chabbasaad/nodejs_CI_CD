const UserDatabase = require('../src/userDatabase');

describe('User Database with Hooks', () => {
    let db;
    let testUser;

    // Hook: Run before each test
    beforeEach(() => {
        // Initialize a fresh database for each test
        db = new UserDatabase();
        
        // Create a valid test user
        testUser = {
            firstname: 'Saad',
            lastname: 'Chabba',
            email: 'saad@example.com'
        };
    });

    // Hook: Run after each test
    afterEach(() => {
        // Clean up the database
        db.clearUsers();
    });

    test('should add a new user successfully', () => {
        const user = db.saveUser(testUser.firstname, testUser.lastname, testUser.email);
        
        expect(user).toEqual({
            id: 1,
            firstname: testUser.firstname,
            lastname: testUser.lastname,
            email: testUser.email,
            createdAt: expect.any(Date)
        });
    });


    test('should start with empty database', () => {
        expect(db.getAllUsers()).toHaveLength(0);
        
        db.saveUser(testUser.firstname, testUser.lastname, testUser.email);
        expect(db.getAllUsers()).toHaveLength(1);
    });

    test('should maintain separate user counts', () => {
        const savedUser = db.saveUser(testUser.firstname, testUser.lastname, testUser.email);
        expect(savedUser.id).toBe(1);
        expect(db.getAllUsers()).toHaveLength(1);
    });

    test('should verify database is empty from previous test', () => {
        const savedUser = db.saveUser(testUser.firstname, testUser.lastname, testUser.email);
        // Should be 1, not 2, because database was cleared
        expect(savedUser.id).toBe(1);
        expect(db.getAllUsers()).toHaveLength(1);
    });
}); 