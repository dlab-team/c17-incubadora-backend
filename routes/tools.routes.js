module.exports = app => {
    const tools = require("../controllers/tools.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tools.createJson);
  
    // Retrieve all tools
    router.get("/", tools.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tools.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tools.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tools.delete);
  
    // Delete all tools
    router.delete("/", tools.deleteAll);
  
    app.use('/api/tools', router);
  };