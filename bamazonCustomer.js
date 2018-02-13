var mysql = require("mysql");
var inquirer = require("inquirer");

// connection for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  makeTable();
});

// function which prompts the user for what action they should take
var makeTable = function() {
        connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].itemid+" || "+res[i].productname+" || "+
        res[i].departmentname+" || "+res[i].price+" || "+res[i].stockquantity+"\n");
        
      }
    promptCustomer(res);  
    });
}

var promptCustomer = function(res){
  inquirer.prompt([{
    type: "input",
    name: "choice",
    message: "Make your purchase choice (type item number)"
  }]).then(function(answer){
    var correct = false;
    for (var i = 0; i<res.length; i++) {
      if(res[i].itemid==answer.choice){
        correct=true;
        var product= answer.choice;
        var id=i;
        inquirer.prompt({
          type: "input",
          name: "quant",
          message: "Choose a Quantity ",
          validate: function(value){
            if(isNaN(value)==false) {
              return true;
            } else {
              return false;
            }
          }
        }).then(function(answer){
          if((res[id].stockquantity - answer.quant) > 0){
            console.log(res[id].stockquantity);
            console.log(answer.quant);

            var newQuantity = (res[id].stockquantity - answer.quant);

          //  connection.query("UPDATE products SET stockquantity ='"+(res[id].stockquantity-answer.quant)+"' WHERE itemid= '" + res[id].itemid
          //    +"'",
              connection.query("UPDATE products SET stockquantity = ? WHERE itemid = ? ", [newQuantity, res[id].itemid],
               function(err,res2){
                console.log("Purchase completed");
                makeTable();
              })
            } else {
              console.log("Not a Valid choice");
              promptCustomer(res);
            }          
        })          
      }
    }
  if(i==res.length && correct == false){
    console.log("Invalid choice");
  }  
  })
}
















