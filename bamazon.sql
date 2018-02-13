-- Created DataBase bamazon
create database bamazon;
USE bamazon;

-- Created Table columns for store front items

CREATE TABLE products (
  itemid INT auto_increment NOT NULL,
  productname VARCHAR(45) NOT NULL,
  departmentname VARCHAR(45) NOT NULL,  
  price DECIMAL(10,4) NOT NULL,
  stockquantity INT(10) NOT NULL,
  PRIMARY KEY (itemid)
);

-- Created a list of items to populate table, these are the items for sale    

INSERT INTO products(productname,departmentname,price,stockquantity)
VALUES 	('bolt M10 x 15','hardware',1.15,657),
		('bolt M12 x 20','hardware',1.99,553),
		('bolt M8 x 35','hardware',1.99,350),
		('washer M8 x 38mm','hardware',1.29,222),
		('washer M12 x 42mm','hardware',1.89,234),
		('washer M10 x 40mm','hardware',1.69,198),
		('PXM sealent','adhesives',6.99,22),
		('duct tape','adhesives',3.99,13),
		('paper towels','misc',3.99,17),
		('rubber goloves','misc',1.76,19),
		('10w30 pen','oils',4.99,19),
		('10w40 pen','oils',5.44,15),
		('bearing greese','oils',10.89,9);
    
SELECT * FROM bamazon.products;