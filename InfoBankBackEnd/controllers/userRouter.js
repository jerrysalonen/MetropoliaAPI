const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

/*
usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.json(users.map(u => u.toJSON()))
})
*/

usersRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body
    //toimisko pe
    if(body.username.length < 3 || body.username === null){
        response.status(400).json({"error":"error"}).end()
    }else{
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        if(body.admin === "tulostin"){
            const user = new User({
                username: body.username,
                name: body.name,
                passwordHash,
                admin: true,
            })
            const savedUser = await user.save()
            response.json(savedUser).end()
        }else{
            const user = new User({
                username: body.username,
                name: body.name,
                passwordHash,
                admin: false,
            })
            const savedUser = await user.save()
             response.json(savedUser).end()
        }
    }
  } catch (exception) {
    next(exception)
  }
})

module.exports = usersRouter