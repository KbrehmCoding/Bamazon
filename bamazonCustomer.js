var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 7000,


    user: "root",

    password: "",
    database: "bamazon_db"
});

function askId() {
    inquirer
        .prompt({
            name: "id",
            type: "input",
            message: "Please enter the ID of the product you want to buy",
        });
}

function askAmount() {
    inquirer
        .prompt({
            name: "amount",
            type: "input",
            message: "How may would you like to buy?"
        });
}
.then(function (answer) {
    connection.query(
        "DELETE FROM products ?",
        {
            product_name: answer.product,
            department_name: answer.department,
            price: answer.price,
            stock_quantity: answer.stock
        },
        function (err) {
            if (err) throw err;
            console.log("Your purchase was successfull!");
            start();
        }
    );
});
}

