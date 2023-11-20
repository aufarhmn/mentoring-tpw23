const User = require('../models/User.js');

// CREATE
exports.registerUser = (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({
        name,
        email,
        password
    });

    newUser
        .save()
        .then((user) => {
            res.status(200).json({
                user
            })
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
};

// READ ALL
exports.getAllUsers = (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).json({
                users
            })
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
};

// READ BY EMAIL
exports.getUserByEmail = (req, res) => {
    const { email } = req.params;

    User.findOne({ email })
        .then((user) => {
            res.status(200).json({
                user
            })
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
};

// UPDATE BY EMAIL
exports.updateUser = (req, res) => {
    const { email, name, password } = req.body;

    User.findOne({ email: email })
        .then((user) => {
            user.name = name;
            user.password = password;

            user
                .save()
                .then((user) => {
                    res.status(200).json({
                        user
                    })
                })
                .catch((err) => {
                    res.status(500).json({
                        error: err
                    })
                })
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
};

// DELETE BY EMAIL
exports.deleteUser = (req, res) => {
    const { email } = req.params;

    User.deleteOne({ email })
        .then((user) => {
            res.status(200).json({
                user
            })
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
};

// DELETE ALL
exports.deleteAllUsers = (req, res) => {
    User.deleteMany()
        .then((users) => {
            res.status(200).json({
                users
            })
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
};