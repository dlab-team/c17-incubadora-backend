const db = require("../models");
const Soft_skills = db.soft_skills;
const Work_profiles = db.work_profiles;
const Work_profile_soft_skills = db.work_profile_soft_skills;



exports.createJson = (req, res) => {
  
  if (!req.body.workProfileId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const work_profile_soft_skills = {
    workProfileId: req.body.workProfileId,
    softSkillId: req.body.softSkillId
    
  };

  
  Work_profile_soft_skills.create(work_profile_soft_skills)
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




exports.create = (work_profile_id, soft_skillid) => {
  return Work_profile_soft_skills.create({
    workProfileId: work_profile_id,
    softSkillId: soft_skillid,
  })
    .then((work_profile_soft_skills) => {
      console.log(">> Created work_profile_soft_skills: " + JSON.stringify(work_profile_soft_skills, null, 4));
      return work_profile_soft_skills;
    })
    .catch((err) => {
      console.log(">> Error while creating work_profile_soft_skills: ", err);
    });
};




  exports.findAllWork_profilesWork_profile_soft_skills = () => {
    return Work_profiles.findAll({
      include: ["Work_profile_soft_skills"],
    }).then((work_profiles) => {
      return work_profiles;
    });
  };



  exports.findAllSoft_skillsWork_profile_soft_skills = () => {
    return Soft_skills.findAll({
      include: ["Work_profile_soft_skills"],
    }).then((soft_skills) => {
      return soft_skills;
    });
  };





  exports.findAll = (req, res) => {
  
    const workProfileId = req.query.workProfileId;
    var condition = workProfileId ? { workProfileId: { [Op.like]: `%${workProfileId}%` } } : null;
  
    Work_profile_soft_skills.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Work_profile_soft_skillss."
        });
      });
  };
  
  
  
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Work_profile_soft_skills.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Work_profile_soft_skills with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Work_profile_soft_skills with id=" + id
        });
      });
  };
  
  
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Work_profile_soft_skills.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Work_profile_soft_skills was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Work_profile_soft_skills with id=${id}. Maybe Work_profile_soft_skills was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Work_profile_soft_skills with id=" + id
        });
      });
  };

