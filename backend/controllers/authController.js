const users = require('../data/user.json');
const jwt = require('jsonwebtoken');

const authController = {};

authController.login = (req, res) => {
    const { userName, password } = req.body;

    // Find user in the users array
    const user = users.find(u => u.userName === userName && u.password === password);

    if (user) {
        // Generate JWT token
        const token = jwt.sign({ userName: user.userName }, '3d6818d12074be9c939de6c49c62f0bc', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
};

authController.logout = (req, res) => {
    
    res.status(200).json({ message: 'Logout successful' });
};

module.exports = authController;
