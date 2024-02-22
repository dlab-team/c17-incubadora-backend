module.exports = app => {
    const education_experiences = require("../controllers/education_experiences.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", education_experiences.createJson);
  
    // Retrieve all education_experiences
    router.get("/", education_experiences.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", education_experiences.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", education_experiences.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", education_experiences.delete);
  
    // Delete all education_experiences
    router.delete("/", education_experiences.deleteAll);
  
    app.use('/api/education_experiences', router);
  };