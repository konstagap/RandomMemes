const mongoose = require('mongoose');

require('dotenv').config();

// -------------- DATABASE ----------------
const connectionString = process.env.DB_STRING;

mongoose
	.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Mognoose connected to database :>> '))
	.catch((err) =>
		console.log('err happened, can not connect mongoose :>> ', err)
	);

// // Expose the connection
module.exports = mongoose.connection;
