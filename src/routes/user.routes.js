const express = require('express')
const userRoutes = express()
const UserControllers = require('../controllers/usersControllers')
const userController = new UserControllers()

userRoutes.use(express.json())



userRoutes.post('/create', userController.createUser)

module.exports = userRoutes