const authRoute = require('./auth');


module.exports = (app, passport) => {
     authRoute(app, passport)


    return app
}