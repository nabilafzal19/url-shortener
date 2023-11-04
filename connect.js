const mongoose = require('mongoose')

exports.mongodbConnection = async (url) => {
    try {
        await mongoose.connect(url)
        console.log('mongodb connection successfull')
    } catch (error) {
        console.log(error)
    }
}