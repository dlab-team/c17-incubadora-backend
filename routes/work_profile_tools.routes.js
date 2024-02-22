module.exports = app => {
    const work_profile_tools = require("../controllers/work_profile_tools.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", work_profile_tools.createJson);
  
    // Retrieve all work_profile_tools
    router.get("/", work_profile_tools.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", work_profile_tools.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", work_profile_tools.update);
  
  
    app.use('/api/work_profile_tools', router);
  };