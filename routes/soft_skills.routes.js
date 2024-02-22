module.exports = app => {
    const soft_skills = require("../controllers/soft_skills.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", soft_skills.createJson);
  
    // Retrieve all soft_skills
    router.get("/", soft_skills.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", soft_skills.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", soft_skills.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", soft_skills.delete);
  
    // Delete all soft_skills
    router.delete("/", soft_skills.deleteAll);
  
    app.use('/api/soft_skills', router);
  };