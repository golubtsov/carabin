const mysql = require('mysql');
const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'website_carabin'
};

const pool = mysql.createPool(config);

module.exports = pool;
