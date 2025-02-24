function devide(a, b) {
    // Check if arguments are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }

    // Check for NaN values
    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new Error('Arguments cannot be NaN');
    }

    // Check for infinite values
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new Error('Arguments must be finite numbers');
    }

    // Check for division by zero
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }

    return a / b;
}

module.exports = devide;