const Express = require('express');

const {PORT} = require('./config');
const { dbTest, db, Cart, CartItem } = require('./db');
const app = Express();
const loaders = require('./Loaders')

function startServer(){

    loaders(app)
    dbTest()
    db.sequelize.sync({force: false}).then(() => {
        console.log('Drop And Re-Sync DB')
    })

   


    app.get('/', function (){
        console.log("Test")
    })
    
    app.listen(PORT, async () => {
        console.log(`Server is listening on Port:${PORT}`)
    })
}

startServer();