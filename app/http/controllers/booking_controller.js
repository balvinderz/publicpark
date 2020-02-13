const User = require('../../database/users');
const Booking = require('../../database/booking')

exports.bookSlot = async (req, res) => {
    let username = req.body.username;
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;
    let placeName = req.body.placename;
    let time = req.body.time;
    let cost = req.body.cost;
    let otp = req.body.otp;
    let vno = req.body.vno;
    let date = req.body.date;
    let bookingUsername = req.body.username;
    let err
    let data = {
        username,
        longitude,
        latitude,
        placeName,
        time,
        cost,
        otp,
        vno, 
        date,
        bookingUsername
    }
    
    await User.findOne({ username })
    await User.findOne({ username })
        .then((user) => {
            data.userId = user._id
        })
        .catch((err) => {
            console.log(err)
        })
    let book = new Booking(data);
    await book.save().then(async (booking) => {
        await User.findOneAndUpdate({ username }, { $push: { "booking": booking._id } })
            .catch((err) => {
                console.log(err)
            })
    }).catch((err) => {
        console.log(err);
    });
    return res.json({ "success": "true", "error": "non" })
}

exports.updateBooking = async (req, res) => {
   // let username = req.body.username
    let otp = req.body.otp
    let booking_id = req.body.booking_id
    let verified = false
    let success = false
    let error = null
    console.log(booking_id)
    await Booking.findById(booking_id)
        .then((book) => {
            console.log(book)
            if (book.otp == otp) {
                verified = true
            }
        })
        .catch(console.log)
    if (verified) {
        await Booking.findByIdAndUpdate(booking_id, { verified: true }).then(success = true).catch((err) => {
            error = err
        })
    }
    return res.json({ success,error })
}

exports.showAllBooks = async (req, res) => {
    let books = await Booking.find().then().catch()
    return res.json(books)
}