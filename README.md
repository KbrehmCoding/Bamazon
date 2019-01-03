# Bamazon
https://kbrehmcoding.github.io/Bamazon/

User Instructions:
you will need to install the node applications inquirer, mysql, and dotenv
this is a command line app so you will need to navigate into the bamazonCustomer.js file to use it
use the command node bamazonCustomer.js to start the program
type in the id number for the item you want to buy
type in a quantity (if it is too high you will ge t a message saying Insuffiencent Quantity)
after you have done this the myswl table will update the stock_quantity, to see the stock being updated be sure to open the mysql workbench before purchasing, that way you can hit the refresh to see the stock_quantity change.
thank you.

Below are screen shots of the code in action!

![screen shot 2019-01-02 at 5 10 20 pm](https://user-images.githubusercontent.com/43114762/50615334-1d4c0680-0eb2-11e9-9663-5a2f295959ed.png)
![screen shot 2019-01-02 at 5 10 38 pm](https://user-images.githubusercontent.com/43114762/50615336-1e7d3380-0eb2-11e9-9bbc-d31694cba27c.png)
![screen shot 2019-01-02 at 5 10 54 pm](https://user-images.githubusercontent.com/43114762/50615338-2046f700-0eb2-11e9-9521-af7092abf3de.png)
![screen shot 2019-01-02 at 5 11 12 pm](https://user-images.githubusercontent.com/43114762/50615340-2210ba80-0eb2-11e9-8f77-b3a336c7e6b8.png)
![screen shot 2019-01-02 at 5 11 26 pm](https://user-images.githubusercontent.com/43114762/50615343-23da7e00-0eb2-11e9-823a-5205c7da710b.png)


my thought process:
    will need variables for the product ID, stock quantity, price, order quantity, and the total cost
    in order to display all the items available for sale, I will need to
        access the mysql table
        retrieve all the data
        print the data to the screen/terminal
    in order to process the customers order, I will need to
        ask for the item ID
        ask for the desired quantity
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