// Models
const { User } = require('./user.model');
const { Restaurant } = require('./restaurant.model');
const { Meal } = require('./meal.model');
const { Order } = require('./order.model');
const { Review } = require('./review.model');

// Establish your models relations inside this function
const initModels = () => {

    // 1 User <----> M Review
    User.hasMany(Review);
    Review.belongsTo(User);

    // 1 User <----> 1 Order
    User.hasOne(Order);
    Order.belongsTo(User);
    
    // 1 Restaurant <----> M Meals
    Restaurant.hasMany(Meal);
    Meal.belongsTo(Restaurant);

    // 1 Restaurant <----> M Review
    Restaurant.hasMany(Review);
    Review.belongsTo(Restaurant);

    // 1 Meal <----> 1 Order
    Meal.hasOne(Order);
    Order.belongsTo(Meal);

};

module.exports = { initModels };
