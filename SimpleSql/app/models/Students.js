//MYSQL CONNECT
const db = require("../../mysql-connection");
class Students {
  constructor() {
    this.__connection = new db('student');
  }
  //GET ALL STUDENT LIST
  async getAll() {
    return await this.__connection.getAll();
  }

  //GET SPECIFIC STUDENT
  getById(id) { 
    return this.__connection.getById(id);
  }

  //ADD NEW STUDENT
  addStudent(newStudentData){
    return this.__connection.create(newStudentData);
  }

  //DELETE STUDENT BY ID
  deleteStudent(id){
    return this.__connection.delete(id);
  }
}

//EXPORT CLASS
module.exports = new Students();