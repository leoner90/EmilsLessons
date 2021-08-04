const mysql = require("mysql2/promise");

// const connection =  await mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "mvc-repository",
//   });


//   module.exports = connection;
//pools where all conection are stored takes existing connection and reuse it
//   connection.query("SQL HERE");
//POOLS 
(async () => {
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "university",
    waitForConnections: true,
    connectionLimit: 10,
  })
  const [rows] = await pool.promise().query("SELECT * FROM student")
  console.log()
})



//tryes to find first free connection
// pool.getConnection((err,connection)=>{
//     if (error) throw err;
//     connection.query("SQL HERE");
//     // pool.releaseConnect;
// })

 


