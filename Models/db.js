const mysql=require('mysql');

const db= mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'786Hh@786',
    database : 'node'
 });
 
 db.connect((err)=>{
    if(err) throw err;
    console.log('MySQL Connected ...');
 });
 

 module.exports=db;