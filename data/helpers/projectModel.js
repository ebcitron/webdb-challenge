const db = require("../dbConfig");
const mappers = require("./mappers");

module.exports = {

insert: function(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => this.get(id));
},

getProjectActions: function(projectId) {
  return db("actions")
    .where("project_id", projectId)
    .then(actions => actions.map(action => mappers.actionToBody(action)));
}
}
