const isValidEmail = require('../src/emailValidator');

describe('Email Validator', () => {
    test('should validate standard email addresses', () => {
        expect(isValidEmail('jean@gmail.com')).toBe(true);
        expect(isValidEmail('jean@yahoo.fr')).toBe(true);
    });

    test('should validate IP-based email addresses', () => {
        expect(isValidEmail('jean@122.31.5.21')).toBe(true);
    });

    test('should validate email addresses with plus signs', () => {
        expect(isValidEmail('jean+spam@gmail.com')).toBe(true);
        expect(isValidEmail('jean+filter@yahoo.com')).toBe(true);
    });

    test('should validate government domain emails', () => {
        expect(isValidEmail('jean@justice.gouv.fr')).toBe(true);
        expect(isValidEmail('user@education.gouv.fr')).toBe(true);
    });
    const invalidEmails = [
        'jean@',
        '@gmail.com',
        'jean@gmail',
        'jean@.com',
        'jean@gmail..com',
        'jean@@gmail.com',
        'jean@gmail.c',
        'jean@123.456.789.0000'
    ];
    test.each(invalidEmails)('should reject invalid email addresses', (email) => {
        expect(isValidEmail(email)).toBe(false);

    });
}); 