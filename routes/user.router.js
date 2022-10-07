const express = require('express');
const { updateUser, createUser } = require('../controllers/user.controller');
const router = express.Router();

router.put('/', updateUser)

router.post('/', createUser)

module.exports = router;
