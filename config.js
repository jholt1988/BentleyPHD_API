const dotenv = require("dotenv").config()

module.exports = {
    PORT: process.env.PORT,
    SESSION_SECRET: process.env.SESSION_SECRET,
    DB:{
        USER:process.env.USER,
        PASSWORD:process.env.PASSWORD,
        DBPORT:process.env.DBPORT,
        DB:process.env.DB,
        HOST: process.env.HOST
    },
    STRIPEKEY:process.env.STRIPEKEY,
    DBURL: process.env.DBURL
}