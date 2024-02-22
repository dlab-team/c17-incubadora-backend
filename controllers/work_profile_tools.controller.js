const db = require("../models");
const Tools = db.tools;
const Work_profiles = db.work_profiles;
const Work_profile_tools = db.work_profile_tools;



exports.createJson = (req, res) => {
  
  if (!req.body.workProfileId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const work_profile_tools = {
    workProfileId: req.body.workProfileId,
    toolId: req.body.toolId
   
  };

  
  Work_profile_tools.create(work_profile_tools)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};



exports.create = (work_profile_id, toolsId) => {
  return Work_profile_tools.create({
    workProfileId: work_profile_id,
    toolId: toolsId,
  })
    .then((work_profile_tools) => {
      console.log(">> Created work_profile_tools: " + JSON.stringify(work_profile_tools, null, 4));
      return work_profile_tools;
    })
    .catch((err) => {
      console.log(">> Error while creating work_profile_tools: ", err);
    });
};




  exports.findAllWork_profilesWork_profile_tools = () => {
    return Work_profiles.findAll({
      include: ["Work_profile_tools"],
    }).then((work_profiles) => {
      return work_profiles;
    });
  };



  exports.findAllToolsWork_profile_tools = () => {
    return Tools.findAll({
      include: ["Work_profile_tools"],
    }).then((tools) => {
      return tools;
    });
  };




  exports.findAll = (req, res) => {
  
    const workProfileId = req.query.workProfileId;
    var condition = workProfileId ? { workProfileId: { [Op.like]: `%${workProfileId}%` } } : null;
  
    Work_profile_tools.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Work_profile_toolss."
        });
      });
  };
  
  
  
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Work_profile_tools.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Work_profile_tools with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Work_profile_tools with id=" + id
        });
      });
  };
  
  
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Work_profile_tools.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Work_profile_tools was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Work_profile_tools with id=${id}. Maybe Work_profile_tools was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Work_profile_tools with id=" + id
        });
      });
  };

