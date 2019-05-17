const express = require("express");
const helmet = require("helmet");

const projectRouter = require("./routers/projectRouter");
const actionRouter = require("./routers/actionRouter");
const server = express();
server.use(express.json());
server.use(helmet());

server.use("/api/project", projectRouter);
server.use("/api/action", actionRouter);
server.get("/", (req, res) => {
  res.send("Welcome to the server!");
});
module.exports = server;
