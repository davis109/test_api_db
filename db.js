const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asprine9344',
  database: 'tutorial_db'
});

connection.connect(error => {
  if (error) throw error;
  console.log('Connected to MySQL database.');
});

module.exports = connection;
