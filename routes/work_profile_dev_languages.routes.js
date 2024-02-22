module.exports = app => {
    const work_profile_dev_languages = require("../controllers/work_profile_dev_languages.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", work_profile_dev_languages.createJson);
  
    // Retrieve all work_profile_dev_languages
    router.get("/", work_profile_dev_languages.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", work_profile_dev_languages.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", work_profile_dev_languages.update);
  
  
    app.use('/api/work_profile_dev_languages', router);
  };