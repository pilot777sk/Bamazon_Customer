# Bamazon
# Node.js & MySQL

## Description

This application uses the command line to access the Bamazons storefront. This app will requires the npm [inquirer](https://www.npmjs.com/package/inquirer) package as well as the npm [mysql](https://www.npmjs.com/package/mysql) MySQL database backend package. The application allows a customer interface: **customer**.

### MySQL Database Setup

To run this application, you will need to have the MySQL database set up on your machine. The package can be down loaded at [MySQL installation page](https://dev.mysql.com/doc/refman/5.6/en/installing.html)  Once installed, you can create the *Bamazon* database and the *products* table with the SQL code. This code is stored in [Bamazon.sql](Bamazon.sql). Cut and paste the code inside your MySQL client [Sequel Pro](https://www.sequelpro.com/) and populate the database, then you will be ready to proceed with running the Bamazon customer interface.

### Customer Interface

To view the current inventory the Customer interface will give you access to the store items: item IDs, descriptions, department and price. The customer can then purchase items by entering the item ID and the desired quantity. If the items quantity is available, the customers order will be filled, and will display the total purchase price and update the store database. If the desired quantity is not available, the user will be prompted to modify the order.

To run the customer interface please follow the steps below:

	git clone git@github.com:pilot777sk/bamazon.git
	cd bamazon
	npm install
	node bamazonCustomer.js











