const { Router } = require('express')

const UserController = require('../controllers/UsersController')
const UserAvatarController = require('../controllers/UserAvatarController')

const ensureAuthenticate = require('../middlewares/ensureAuthenticate')

const multer = require('multer')
const uploadConfig = require('../config/upload')

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const userController = new UserController()
const userAvatarController = new UserAvatarController()

usersRoutes.post('/', userController.create)
usersRoutes.put('/', ensureAuthenticate, userController.update)
usersRoutes.patch('/avatar', ensureAuthenticate, upload.single('avatar'), userAvatarController.update)

module.exports = usersRoutes
