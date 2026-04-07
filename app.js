function login(user) {
    if (!user) {
        return "No user";
    }
    return "User logged in";
}

module.exports = { login };