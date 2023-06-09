const userRouter = require('express').Router();

const {
  getUsers, getUserById, updateProfile, updateAvatar, getUserInfo,
} = require('../controllers/users');

const {
  validatorUserId,
  validatorUpdateProfile,
  validatorUpdateAvatar,
} = require('../middlewares/validators/users');

userRouter.get('/', getUsers);
userRouter.get('/me', getUserInfo);
userRouter.get('/:userId', validatorUserId, getUserById);
userRouter.patch('/me', validatorUpdateProfile, updateProfile);
userRouter.patch('/me/avatar', validatorUpdateAvatar, updateAvatar);

module.exports = userRouter;
