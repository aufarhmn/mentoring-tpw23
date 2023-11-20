const express = require('express');
const router = express.Router();

const { registerUser,
        getAllUsers,
        getUserByEmail,
        updateUser,
        deleteAllUsers,
        deleteUser } = require('../controllers/user.js');

router.post('/register', registerUser);

router.get('/all', getAllUsers);

router.get('/:email', getUserByEmail);

router.put('/edit', updateUser);

router.delete('/all', deleteAllUsers);

router.delete('/:email', deleteUser);

module.exports = router;