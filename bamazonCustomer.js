var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 7000,

    user: "root",

    password: "",
    database: "bamazon_db"
});

var id = item_id;
var price = price;
var quantity = stock_quantity;
var orderQuantity = ;
var totalCost = price * orderQuantity;

function readProducts() {
    console.log("Complete Stock tally\n");
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        console.log(results);
        connection.end();
    });
}
}

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
                    message: "How many would you like to buy?"
                });
        })
    if (amount < stock_quantity) {
        "UPDATE"
    }
// ok so I know that this is not what I need to do, I need to decrese the stock_quanitiy integer not delete the whole row, this is just a place holder for now
.thenfunction updateProduct() {
        console.log("Updating Stock\n");
        var query = connection.query(
            "UPDATE products SET ? WHERE ?",
            [
                {
                    quantity: 100
                },
                {
                    item_id
                }
            ],
            function (err, res) {
                console.log(res.affectedRows + " Purchase Successful!\n");
            }
        );

        // logs the actual query being run
        console.log(query.sql);
    }
