const express = require('express');

const router = express.Router();

// Middlewares
const {
    createRestaurantValidations,
    createReviewValidations,
    checkValidations,
} = require('../middlewares/validations.middlewares');
const {
    protectToken,
    protectAdmin,
} = require('../middlewares/users.middlewares');

// Controllers
const {
    getAllRestaurants,
    createRestaurant,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
    createReview,
    updateReview,
    deleteReview,
} = require('../controllers/restaurants.controller');

// Endpoints
router
    .route('/')
    .get(getAllRestaurants)
    .post(createRestaurantValidations, checkValidations, createRestaurant);
router.get('/:id', getRestaurantById);
// Validation session
router.use(protectToken);
router
    .route('/:id')
    .patch(protectAdmin, updateRestaurant)
    .delete(protectAdmin, deleteRestaurant);
router
    .route('/reviews/:id')
    .post(createReviewValidations, checkValidations, createReview)
    .patch(updateReview)
    .delete(deleteReview);

module.exports = { restauratsRouter: router };
