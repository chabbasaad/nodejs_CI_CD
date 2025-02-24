function isValidEmail(email) {
    // Basic email regex that handles the required cases
    const emailRegex = /^[a-zA-Z0-9.+_-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$|^[a-zA-Z0-9.+_-]+@\[?\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]?$/;
    return emailRegex.test(email);
}

module.exports = isValidEmail; 