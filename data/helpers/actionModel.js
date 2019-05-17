const db = require("../dbConfig.js");
const mappers = require("./mappers");

module.exports = {
getActions,
addAction
};


function getActions(){
  return db("actions");
}

function addAction(action){
  return db("actions").insert(action);
}