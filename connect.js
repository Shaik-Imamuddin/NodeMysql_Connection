const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Your Mysql Password',
  database: 'node'
});
connection.connect((err) => {
  if (err) {
    console.error('Connection not Established:', err.message);
    return;
  }
  console.log('Connection Established');
});