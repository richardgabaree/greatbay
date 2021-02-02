const inquirer = require("inquirer");
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',

//   Please use your own local password!
  password: '',
  database: 'greatbay_DB',
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  connection.end();
});
