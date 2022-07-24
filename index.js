const Express = require('express');

const { PORT } = require('./config');
const { dbTest } = require('./db');
const app = Express();
const loaders = require('./Loaders');

/**
 *  The express server
 *   
 */
async function startServer() {

    loaders(app)
    dbTest()

    // await db.sequelize.sync({alter:true}).then(() => {
    //     console.log('Drop And Re-Sync DB')
    // })



    app.get('/', function () {

        console.log("Test")
    })
    app.listen(PORT, async () => {
        (`Server is listening on Port:${PORT}`)
    })
}

startServer();