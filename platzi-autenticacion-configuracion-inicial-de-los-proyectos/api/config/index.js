require('dotenv').config();

const config = {
    authJWTSecret: process.env.AUTH_JWT_SECRET
};

module.exports = {config: config};