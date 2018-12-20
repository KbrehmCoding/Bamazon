var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 7000,


    user: "root",

    password: "",
    database: "bamazon_db"
});
