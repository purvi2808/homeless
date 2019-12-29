/*connection to mysql database*/
const mysql=require("mysql");
config={
    host:'localhost',
    user:"root",
    password:'',
    database:'homeless',
    port:3306
};
var mysqlConnection=mysql.createConnection(config);
mysqlConnection.connect((err)=>{
    if(!err){
        console.log("DB connection succeeded.");
    }
    else{
        console.log("DB connection failed.\n Error:"+JSON.stringify(err));
    }
});/*connection established*/

module.exports ={
    mysqlConnection : mysql.createConnection(config) 
} 