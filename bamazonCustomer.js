var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 7000,


    user: "root",

    password: "",
    database: "bamazon_db"
});

function buyItems() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
            inquirer
                .prompt({
                    name: "id",
                    type: "input",
                    message: "Please enter the ID of the product you want to buy",
                });
        },
        function askAmount() {
            inquirer
                .prompt({
                    name: "amount",
                    type: "input",
                    message: "How may would you like to buy?"
                });
        })
if(amount<stock_quantity) {
            "UPDATE
        }
ok so I know that this is not what I need to do, I need to decrese the stock_quanitiy integer not delete the whole row, this is just a place holder for now
.then(function (answer) {
            connection.query(
                // TODO look up how to decrement mysql using js"",
                {
                    stock_quantity: answer.stock
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your purchase was successfull!");
                    start();
                }
            );
        }))
    }