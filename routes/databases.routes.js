module.exports = app => {
    const databases = require("../controllers/databases.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", databases.createJson);
  
    // Retrieve all databases
    router.get("/", databases.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", databases.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", databases.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", databases.delete);
  
    // Delete all databases
    router.delete("/", databases.deleteAll);
  
    app.use('/api/databases', router);
  };