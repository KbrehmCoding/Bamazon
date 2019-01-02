DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT,
product_name VARCHAR (50),
department_name VARCHAR (50),
price INTEGER (200),
stock_quantity INTEGER (200),
PRIMARY KEY (item_id)
);

USE bamazon_db;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('sweater', 'clothing', 15, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('eyeliner', 'makeup', 20, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('airpods', 'electronics', 150, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('sheets', 'bedding', 50, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('novel', 'books', 15, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('earings', 'jewlery', 25, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('jeans', 'clothing', 60, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('blush', 'makeup', 20, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('macbook pro', 'electronics', 1200, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('duvet', 'bedding', 100, 15);

SELECT * FROM products;