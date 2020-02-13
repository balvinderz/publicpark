
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "users"
	},
	placeName: {
		type: String,
		required: true
	},
	latitude: {
		type: String,
		required: true
	},
	longitude: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	cost: {
		type: String,
		required: true
	},
	otp: {
		type: String,
        required : true
    },
    verified : {
        type: Boolean,
        required : true,
        default : false
	},
	date : {
		type : String,
		required : true,
		default : false,
	},
	vno  : {
		type : String,
		required : true,
		default : false
	},
	bookingUsername : {
		type : String,
		required : true,
		default : false
	}
	
});

module.exports = mongoose.model('booking', bookingSchema);