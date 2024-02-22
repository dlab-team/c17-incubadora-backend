module.exports = app => {
    const work_profile_soft_skills = require("../controllers/work_profile_soft_skills.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", work_profile_soft_skills.createJson);
  
    // Retrieve all work_profile_soft_skills
    router.get("/", work_profile_soft_skills.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", work_profile_soft_skills.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", work_profile_soft_skills.update);

  
    app.use('/api/work_profile_soft_skills', router);
  };