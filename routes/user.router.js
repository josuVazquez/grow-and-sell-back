const express = require('express');
const { updateUser, createUser, getUser } = require('../controllers/user.controller');
const router = express.Router();

router.put('/', updateUser)

router.get('/', getUser)

router.post('/', createUser)

module.exports = router;
