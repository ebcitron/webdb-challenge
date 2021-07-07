const express = require("express");
const Project = require("../data/helpers/projectModel");
const Actions = require("../data/helpers/actionModel");

const projectRouter = express.Router();

// Get all

projectRouter.get("/", async (req, res) => {
  try {
    const project = await Project.getProjects();
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving projects" });
  }
});

//Get by Id

projectRouter.get("/:id", async (req, res) => {
  try {
    const project = await Project.getProject(req.params.id);
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving Project" });
  }
});

projectRouter.get("/actions/:id", async (req, res) => {
  try {
    const projectActions = await Project.getProjectActions(req.params.id);
    const project = await Project.getProject(req.params.id);
    res.status(200).json({ ...project, projectActions });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving actions by ID" });
  }
});

//Post new Project

projectRouter.post("/", async (req, res) => {
  console.log("req.body", req.body);
  const { name, description, completed } = req.body;
  try {
    const [id] = await Project.addProject(req.body);
    const project = await Project.getProjects(id);
    res.status(200).json({ project });
  } catch (error) {
    console.log("THE ERROR", error);
    res.status(500).json({ message: "Error adding Project" });
  }
});

//Put project by ID

// projectRouter.put("/:id", async (req, res) => {
//   try {
//     const project = await Project.update(req.params.id, req.body);
//     res.status(200).json({ project });
//   } catch (error) {
//     res.status(500).json({ message: "Error editing Project" });
//   }
// });

// //Delete project by ID

// projectRouter.delete("/:id", async (req, res) => {
//   try {
//     const project = await Project.remove(req.params.id);
//     res.status(200).json({ message: "Project was deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting project" });
//   }
// });

module.exports = projectRouter;
