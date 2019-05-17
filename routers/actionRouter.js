const express = require("express");

const Action = require("../data/helpers/actionModel");

const actionRouter = express.Router();

// Get all

//Get actions by action_id

//Post new action to specific action by action_id

//Put action by id

//Delete action by ID

// Get all

actionRouter.get("/", async (req, res) => {
  try {
    const action = await Action.getActions();
    res.status(200).json({ action });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving actions" });
  }
});

// //Get actions by action_id

// actionRouter.get("/:id", async (req, res) => {
//   try {
//     const action = await Action.get(req.params.id);
//     res.status(200).json({ action });
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving action" });
//   }
// });

//Post new action

actionRouter.post("/", async (req, res) => {
  try {
    const { project_id, description, notes, completed } = req.body;
    if (!project_id) {
      res.status(400).json({ message: "must be associated with a project ID" });
    }
    if (!notes || !description || !completed) {
      res.status(404).json({ message: "Needs to have notes and description" });
    } else {
      const [id] = await Action.addAction(req.body);
      const action = await Action.getActions(id);
    res.status(201).json(action);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding action" });
  }
});

//Put action by ID

// actionRouter.put("/:id", async (req, res) => {
//   try {
//     const action = await Action.update(req.params.id, req.body);
//     res.status(200).json({ action });
//   } catch (error) {
//     res.status(500).json({ message: "Error editing action" });
//   }
// });

// //Delete action by ID

// actionRouter.delete("/:id", async (req, res) => {
//   try {
//     const action = await Action.remove(req.params.id);
//     res.status(200).json({ message: "action was deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting action" });
//   }
// });

module.exports = actionRouter;
