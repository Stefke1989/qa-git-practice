function login(user) {
    if (!user) {
        return "No user";
    }
    return "Login successful!";
}

module.exports = { login };