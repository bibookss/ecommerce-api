const { UserController } = require('../../controllers');

const express = require('express');
const router = express.Router();

router.route('/register').post(UserController.register);
router.route('/login').post(UserController.login);

// router.route('/').get(UserController.getAllUsers);
// router.route('/').post(UserController.createUser);
// router.route('/:id').get(UserController.getUserById);
// router.route('/:id').put(UserController.updateUser);
// router.route('/:id').delete(UserController.deleteUser);

module.exports = router;