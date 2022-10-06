var express = require('express');
const { updateUser, createUser } = require('../controllers/user.controller');
var router = express.Router();

router.put('/', updateUser)

router.post('/', createUser)

module.exports = router;
