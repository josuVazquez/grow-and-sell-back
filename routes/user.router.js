const express = require('express');
const { updateUser, createUser, getUser, dummy } = require('../controllers/user.controller');
const router = express.Router();

router.put('/', updateUser)

router.get('/', getUser)
router.get('/dummy', dummy)

router.post('/', createUser)

module.exports = router;
