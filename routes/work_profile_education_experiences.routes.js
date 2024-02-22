module.exports = app => {
    const work_profile_education_experiences = require("../controllers/work_profile_education_experiences.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", work_profile_education_experiences.createJson);
  
    // Retrieve all work_profile_education_experiences
    router.get("/", work_profile_education_experiences.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", work_profile_education_experiences.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", work_profile_education_experiences.update);

  
    app.use('/api/work_profile_education_experiences', router);
  };