function subtract(a, b) {
    // Type validation
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    
    // Check for NaN
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Arguments cannot be NaN');
    }
    
    // Check for finite numbers
    if (!isFinite(a) || !isFinite(b)) {
        throw new Error('Arguments must be finite numbers');
    }
    
    return a - b;
}

module.exports = { subtract };