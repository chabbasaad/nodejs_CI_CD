const devide = require('../src/devide');

describe('devide function', () => {
    test('should correctly divide two positive numbers', () => {
        expect(devide(6, 2)).toBe(3);
        expect(devide(100, 10)).toBe(10);
    });

    test('should correctly handle when first number is smaller', () => {
        expect(devide(3, 6)).toBe(0.5);
        expect(devide(5, 10)).toBe(0.5);
    });

    test('should handle negative numbers correctly', () => {
        expect(devide(-6, -2)).toBe(3);
        expect(devide(6, -2)).toBe(-3);
    });

    test('should handle decimal numbers correctly', () => {
        expect(devide(5.5, 2)).toBeCloseTo(2.75);
        expect(devide(10.5, 2.5)).toBeCloseTo(4.2);
        expect(devide(0.3, 0.1)).toBeCloseTo(3);
    });

    test('should handle division by 1', () => {
        expect(devide(5, 1)).toBe(5);
        expect(devide(-5, 1)).toBe(-5);
        expect(devide(0, 1)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
        expect(() => devide(5, 0)).toThrow('Cannot divide by zero');
        expect(() => devide(-5, 0)).toThrow('Cannot divide by zero');
        expect(() => devide(0, 0)).toThrow('Cannot divide by zero');
    });


    test('should throw error for NaN values', () => {
        expect(() => devide(NaN, 2)).toThrow('Arguments cannot be NaN');
        expect(() => devide(2, NaN)).toThrow('Arguments cannot be NaN');
        expect(() => devide(NaN, NaN)).toThrow('Arguments cannot be NaN');
    });



});