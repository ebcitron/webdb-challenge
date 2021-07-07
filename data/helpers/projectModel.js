const db = require("../dbConfig");
const mappers = require("./mappers");

module.exports = {
  getProjects,
  addProject,
  getProjectActions,
  getProject
}

function getProjects() {
  return db("projects");
}

function getProject(id){
  return db("projects")
  .where ({id})
  .first();
}

function addProject(project){
  return db("projects")
    .insert(project)
}

function getProjectActions(projectId) {
  return db("actions")
    .where("project_id", projectId)
    .then(actions => actions.map(action => mappers.actionToBody(action)));
}

