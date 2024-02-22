module.exports = app => {
    const work_profile_databases = require("../controllers/work_profile_databases.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", work_profile_databases.createJson);
  
    // Retrieve all work_profile_databases
    router.get("/", work_profile_databases.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", work_profile_databases.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", work_profile_databases.update);
  
  
    app.use('/api/work_profile_databases', router);
  };