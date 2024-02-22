module.exports = app => {
    const user_statuses = require("../controllers/user_statuses.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", user_statuses.createJson);
  
    // Retrieve all user_statuses
    router.get("/", user_statuses.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", user_statuses.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", user_statuses.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", user_statuses.delete);
  
    // Delete all user_statuses
    router.delete("/", user_statuses.deleteAll);
  
    app.use('/api/user_statuses', router);
  };