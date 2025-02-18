const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
	try {
		mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}).then(() => {
			console.log('> MongoDB connected')
		})
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = {
	connectDB
}