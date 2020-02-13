const express = require('express'),
    router = express.Router(),
    auth_controller = require('./app/http/controllers/auth_controller'),
    user_controller = require('./app/http/controllers/user_controller'),
    book_controller = require('./app/http/controllers/booking_controller');
    
// @route		GET /routes/test
// @desc		test route
// @params	none
// @return	-
// @permission	all
// TODO			-
router.get("/test",()=>{
    console.log("working")
});

// @route		GET /routes/test
// @desc		test route
// @params	none
// @return	-
// @permission	all
// TODO			-
router.post("/auth/register",auth_controller.register);

// @route		GET /routes/test
// @desc		test route
// @params	none
// @return	-
// @permission	all
// TODO			-
router.post("/auth/login",auth_controller.login);

// @route		GET /routes/test
// @desc		test route
// @params	none
// @return	-
// @permission	all
// TODO			-
router.post("/booking/bookslot",book_controller.bookSlot);


// @route		GET /user/getProfileDetails
// @desc		test route
// @params	    usernane
// @return	-   userdetails
// @permission	all
// TODO			-
router.post("/user/getProfileDetails",user_controller.getProfileDetails);

// @route		GET /user/getProfileDetails
// @desc		test route
// @params	    usernane
// @return	-   userdetails
// @permission	all
// TODO			-
router.post("/user/getBooking",user_controller.getBooking);

// @route		GET /book/addBooking
// @desc		test route
// @params	    usernane
// @return	-   userdetails
// @permission	all
// TODO			-
router.post("/book/addBooking",book_controller.bookSlot);

// @route		GET /book/updataBooking
// @desc		test route
// @params	    username,bookingid,otp
// @return	-   userdetails
// @permission	all
// TODO			-
router.post("/book/updateBooking",book_controller.updateBooking);

// @route		GET /book/showAllBooking
// @desc		test route
// @params
// @return	-   userdetails
// @permission	all
// TODO			-
router.post("/book/showAllBooking",book_controller.showAllBooks);

module.exports = router;   