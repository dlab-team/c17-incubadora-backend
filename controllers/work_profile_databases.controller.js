const db = require("../models");
const Work_profiles = db.work_profiles;
const Work_profile_databases = db.work_profile_databases;


exports.createJson = (req, res) => {
  
  if (!req.body.level) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const work_profile_databases = {
    level: req.body.level,
    workProfileId: req.body.workProfileId,
    databaseId: req.body.databaseId
    
  };

  
  Work_profile_databases.create(work_profile_databases)
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





exports.create = (work_profile_id, databaseid, work_profile_databases) => {
  return Work_profile_databases.create({
    level: work_profile_databases.level,
    workProfileId: work_profile_id,
    databaseId: databaseid,
  })
    .then((work_profile_databases) => {
      console.log(">> Created work_profile_databases: " + JSON.stringify(work_profile_databases, null, 4));
      return work_profile_databases;
    })
    .catch((err) => {
      console.log(">> Error while creating work_profile_databases: ", err);
    });
};




  exports.findAllWork_profilesWork_profile_databases = () => {
    return Work_profiles.findAll({
      include: ["work_profile_databases"],
    }).then((work_profiles) => {
      return work_profiles;
    });
  };




  exports.findAll = (req, res) => {
  
    const level = req.query.level;
    var condition = level ? { level: { [Op.like]: `%${level}%` } } : null;
  
    Work_profile_databases.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Work_profile_databasess."
        });
      });
  };
  
  
  
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Work_profile_databases.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Work_profile_databases with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Work_profile_databases with id=" + id
        });
      });
  };
  
  
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Work_profile_databases.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Work_profile_databases was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Work_profile_databases with id=${id}. Maybe Work_profile_databases was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Work_profile_databases with id=" + id
        });
      });
  };

