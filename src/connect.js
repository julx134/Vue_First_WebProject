var express = require('express');
var mysql = require('mysql');
var app = express();


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"first_vuejs"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/',function(req,resp) {
    con.query("SELECT * FROM cars_trial", function(error,rows,fields) {
       if(!!error) {
           console.log("error");
       }else {
           console.log("success");
           resp.send(rows);
       } 
    });
    
})

app.listen(1337);