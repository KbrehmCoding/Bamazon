# Bamazon

To Do

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