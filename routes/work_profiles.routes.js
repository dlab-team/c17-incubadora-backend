module.exports = app => {
    const work_profiles = require("../controllers/work_profiles.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", work_profiles.createJson);
  
    // Retrieve all work_profiles
    router.get("/", work_profiles.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", work_profiles.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", work_profiles.update);
  
  
    app.use('/api/work_profiles', router);
  };