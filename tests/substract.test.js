const { subtract } = require('../src/substract');



describe('subtract function', () => {

    // Basic operation tests
    it('should correctly subtract two positive numbers', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(10, 5)).toBe(5);
        expect(subtract(100, 50)).toBe(50);
    });

    it('should correctly handle when first number is smaller', () => {
        expect(subtract(3, 5)).toBe(-2);
        expect(subtract(5, 10)).toBe(-5);
    });

    test('should handle negative numbers correctly', () => {
        expect(subtract(-5, -3)).toBe(-2);
        expect(subtract(-3, 5)).toBe(-8);
        expect(subtract(5, -3)).toBe(8);

    });

    test('should handle decimal numbers correctly', () => {
        expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
        expect(subtract(10.5, 5.2)).toBeCloseTo(5.3);
        expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
        });

});