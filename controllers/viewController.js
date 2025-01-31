// const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');
// const User = require('../models/userModel');
// const Bookings = require('../models/bookingModel');
// const Review = require('../models/reviewModel');
// const Favorite = require('../models/favModel');

exports.getHomePage = catchAsync(async(req, res, next) => {
    // // 1) Get all tour data from collection
    // const tours = await Tour.find();
    // // 2) Check if there is user logged in
    // let userFavorites = [];
    // if (req.user) {
    //     userFavorites = await Favorite.find({ user: req.user._id }).select('tour isFav');
    // }
    // // 3) Map through tours and add `isFav` flag for each based on userFavorites
    // const toursWithFavorites = tours.map(tour => {
    //     const fav = userFavorites.find(favorite => favorite.tour.equals(tour._id));
    //     return { 
    //         ...tour.toObject(), // Convert Mongoose document to plain JS object
    //         isFav: fav ? fav.isFav : false // Set `isFav` to true if it's a favorite, otherwise false
    //     };
    // });

    // 4) Render template
    res.status(200).render('home');
});

// exports.getLoginForm = catchAsync(async (req, res) => {
//     res.status(200)
//     .set(
//         'Content-Security-Policy',
//         "connect-src 'self' https://cdnjs.cloudflare.com",
//       )
//         .render('login', {
//         title: 'Log into your account'
//     });
// });

// exports.getAccount = catchAsync(async (req, res, next) => {
//     res.status(200).render('account', {
//         title: 'Your account'
//     });
// });