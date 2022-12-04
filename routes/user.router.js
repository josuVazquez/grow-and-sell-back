const express = require('express');
const { updateUser, createUser, getUser, addFavorite, removeFavorite } = require('../controllers/user.controller');
const router = express.Router();

router.put('/', updateUser)

router.get('/', getUser)

router.post('/', createUser)
router.post('/favorite', addFavorite);
router.delete('/favorite', removeFavorite);

module.exports = router;
