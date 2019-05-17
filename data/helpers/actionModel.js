const db = require("../dbConfig.js");
const mappers = require("./mappers");

module.exports = {
getActions,
addAction,
getActionsByProject
};


function getActions(){
  return db("actions");
}

function addAction(action){
  return db("actions").insert(action);
}

function getActionsByProject(id){
  return db("actions")
  .where({project_id: id});
}