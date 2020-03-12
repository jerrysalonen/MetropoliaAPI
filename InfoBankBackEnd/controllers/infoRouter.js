const infoRouter = require('express').Router()
const Info = require("../models/info")
const jwt = require('jsonwebtoken')
const User = require("../models/user")

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

infoRouter.get('/', async (request, response) => {
  const token = getTokenFrom(request)

  try {
    const decodedToken = jwt.verify(token, process.env.VOLUNTEER)
    console.log(decodedToken)

    if (!decodedToken.id) {
      response.status(401).end()
      console.log("HEHEHHEHE")
    }else{
      const blogs = await Info.find({})
      response.json(blogs.map(Info => Info.toJSON()))
    }

  } catch (error) {
    try {
      const decodedToken2 = jwt.verify(token, process.env.SECRET)
    
      if (!decodedToken2.id) {
        response.status(401).end()
        console.log("unhatorized")
      }else{
        const blogs = await Info.find({})
        response.json(blogs.map(Info => Info.toJSON()))
      }
      
      
    } catch (error) {
      response.status(401).end()
      console.log(error)
    }
    response.status(401).end()
  }
  response.status(401).end()
      
})


infoRouter.delete('/:id', async (request, response,next) => {
  console.log("eka")
  const token = getTokenFrom(request)
  console.log("muntoken " + token)
    try {
      const decodedToken = jwt.verify(token, process.env.SECRET)
      if (!decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
      }

      const r = await Info.findById(request.params.id)
      console.log(r)
      if(!r){
        response.status(404).json({error: "id couldn't be found"}).end()
      }else{
        try {
          await Info.findByIdAndDelete(request.params.id)
          const newInfo = await Info.find({});
          response.json(newInfo.map(Info => Info.toJSON()))
        } catch (error) {
          next(error)
        }
      }
      
    } catch (error) {
      
    }
});


infoRouter.post('/', async (request, response) => {
    let a = request.body
    console.log(a)
    const token = getTokenFrom(request)

    try {
      const decodedToken = jwt.verify(token, process.env.SECRET)
      if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
      }

      let uusi = {
        title: a.title,
        category: a.category,
        text: a.text,
        link: a.link,
        pic: a.pic
      }
      const newInfo = new Info(uusi)
      await newInfo.save()
      response.json(newInfo.toJSON())

    } catch (error) {
      console.log(error)
    }
}



)

module.exports = infoRouter