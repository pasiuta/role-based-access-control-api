
const User = require('../models/user');
const Role = require('../models/role');

exports.registerUser = (req, res) => {
    const { username, password, role } = req.body;
    const user = new User({ username, role });

    User.register(user, password, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'User registered successfully' });
    });
};

exports.loginUser = (req, res) => {

    const { username, password } = req.body;

    User.authenticate(username, password, (err, user) => {
        if (err || !user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        req.session.userId = user._id;

        res.json({ message: 'Login successful' });

    });

};

exports.logoutUser = (req, res) => {

    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Logged out successfully' });
        });
    } else {
        res.json({ message: 'Not logged in' });
    }

};