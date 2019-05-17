const knex = require("knex");

const dbConfig = require("../knexfile.js").development;

module.exports = knex(dbConfig.development);
