const express = require('express');
const { authenticateController, getAllUsersController, registerController } = require('../controllers/authController');
const authenticateToken = require('./middleware.js');
const router = express.Router();

router.post('/authenticate', authenticateController);
router.get("/users", authenticateToken, getAllUsersController);

router.post('/register', registerController);

module.exports = router;