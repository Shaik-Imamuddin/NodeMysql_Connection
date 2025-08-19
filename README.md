# NodeMysql_Connection


install the package 
    ->npm install mysql2 

load mysql driver

->it imports all the necessary functions to interact with mysql database

Why mysql2 and not mysql?
Because mysql2 is newer, faster, supports modern features like promises, and is still actively maintained.

const mysql = require('mysql2');

Create MySQL connection

This creates a connection object that holds all the information needed to connect to your MySQL database.
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_sql_password',
  database: 'node'
});

Connect to MySQL

This initiates the connection to MySQL using the details provided above.
It takes a callback function to handle success or error.
connection.connect((err) => {
  if (err) {
    console.error('Connection not Established:', err.message);
    return;
  }
  console.log('Connection Established');
});