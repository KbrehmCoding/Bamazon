# Bamazon

To Do

create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.


Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
(need to look more into how to do this part, I know how to update the table but not how to check its stock agasint the request being made by the customer)



If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.



However, if your store does have enough of the product, you should fulfill the customer's order.


This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.




my thought process:
    will need variables for the product ID, stock quantity, price, and the total cost
    in order to display all the items available for sale, I will need to
        access the mysql table
        retrieve all the data
        print the data to the screen/terminal
    in order to process the customers order, I will need to
        access the mysql table
        retrieve the specific information
            based on the id number
                special attention to the stock quanitiy and the price collums
        compare the quantity of the order against the quantity in the table
        send an error message if the order value is higher than the table value
        subtract the order value from the table value to update the table
            subtract to update the stock quantity in table
        send a success message if the order value is equal or less than the table value
        tell them the total cost of their purchase
            multiply the price int by the quantity int to get the sum