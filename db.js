require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(error => {
    if(error) throw error;
    console.log('Connected to database');
});

module.exports = connection;

// connection.query('SELECT id, nombre FROM productos', (error, results) => {
//     if(error) throw error;
//     console.log(results);
// });
