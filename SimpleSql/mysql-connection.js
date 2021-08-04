const mysql = require("mysql2");
const fs = require("");
const fs = require("");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "university",
  waitForConnections: true,
  connectionLimit: 10,
})
// get migration file here checks if all needed fields exists
const migration = '';
//deserialise sql buffer
// pool.promise().query();
// [].map , [].foreach dont wait for await use for to loop and await first file the next
// (async () => {}) like a no name exetuable function
//mysql console can be used as in linux

// db_host = localhost node server.js process.env.DB_HOST .env file to not write by hand
class DbStorage {
  constructor(tableName){
    this._table = tableName;

  }

  async getAll() {
    //TRY CATCH GOES HERE...
    const [rows] = await pool.promise().query(`SELECT * FROM ${this._table}`);
    return rows;
  }

  async getById(id) {
    //TRY CATCH GOES HERE...
    const [rows] = await pool.promise().query(`SELECT * FROM ${this._table} WHERE Id_Student=${id}`);
    return rows;
  }

  async create(newStudentData){
    //TRY CATCH GOES HERE...
    const [rows] = await pool.promise().query(`INSERT INTO ${this._table} (Name, Surname, Gender, Age , Id_faculty)  
    VALUES ('${newStudentData.name}', 'surname', '${newStudentData.gender}', ${newStudentData.age}, 2)`);
    return 'succes';
  }

  async update(key,value,id) {
    //TRY CATCH GOES HERE...
    const [rows] = await pool.promise().query(`UPDATE  ${this._table} SET ${key} = ${value} WHERE Id_Student=${id}`);
    return 'succes';
  }

  async delete(id) {
    //TRY CATCH GOES HERE...
    const [rows] = await pool.promise().query(`DELETE FROM ${this._table} WHERE Id_Student=${id}`);
    return 'succes';
  }
}

module.exports = DbStorage;