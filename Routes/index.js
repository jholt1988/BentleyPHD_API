const authRoute = require('./auth');
const userRoute = require('./user');
const cartRoute = require('./cart');

module.exports = (app, passport) => {
     authRoute(app, passport);
     userRoute(app);
     cartRoute(app);

    return app
}