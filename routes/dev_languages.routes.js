module.exports = app => {
    const dev_languages = require("../controllers/dev_languages.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", dev_languages.createJson);
  
    // Retrieve all dev_languages
    router.get("/", dev_languages.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", dev_languages.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", dev_languages.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", dev_languages.delete);
  
    // Delete all dev_languages
    router.delete("/", dev_languages.deleteAll);
  
    app.use('/api/dev_languages', router);
  };