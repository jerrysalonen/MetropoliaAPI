const mongoose = require('mongoose')

const InfoSchema = mongoose.Schema({
    title: String,
    category: String,
    text: String,
    link: String,
    pic: Boolean,
  })

InfoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model("Info",InfoSchema)