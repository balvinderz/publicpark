const User = require('../../database/users');
const booking = require('../../database/booking');

exports.getProfileDetails = async (req, res) => {
    let username = req.body.username
    var founduser = null
    await User.findOne({ username })
        .then((user) => {
            console.log(user)
            founduser = user
        })
        .catch((err) => {
            console.log(err)
        })
    // console.log(founduser)
    if (founduser != null) {
        return res.status(200).json(founduser);
    }
    else {
        return res.json({ "err": "could not find user" })
    }
}

exports.getBooking = async (req, res) => {
    let username = req.body.username
    let bookings_out
    let user = await User.findOne({ username })
        .then(async (user) => {
            console.log(user)
            await booking.find({ "userId": user._id }).populate('userId')
                .then((books) => {
                    console.log(books.length)
                    bookings_out=books
                })
                .catch((err) => {
                    console.log(err)
                })
        })
        .catch(console.log)
    if (bookings_out) {
        return res.status(200).json(bookings_out);
    }
    else {
        return res.json({ "err": "could not find user" })
    }
}


