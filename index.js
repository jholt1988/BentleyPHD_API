const Express = require('express');

const {PORT} = require('./config');
const { dbTest, db } = require('./db');
const app = Express();
const loaders = require('./Loaders')

function startServer(){

    app.use(loaders)
    dbTest()
    db.sequelize.sync({force: false}).then(() => {
        console.log('Drop And Re-Sync DB')
    })
    app.listen(PORT, async () => {
        console.log(`Server is listening on Port:${PORT}`)
    })
}

startServer();