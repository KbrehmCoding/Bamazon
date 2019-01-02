var mysql = require("mysql");
var inquirer = require("inquirer");

require("dotenv").config();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: "bamazon_db"
});

function readProducts() {
    console.log("Complete Stock Tally");
    connection.query("SELECT * FROM products", (err, results) => {
        if (err) throw err;
        console.log(results);
        connection.end();
    });
}

readProducts();
