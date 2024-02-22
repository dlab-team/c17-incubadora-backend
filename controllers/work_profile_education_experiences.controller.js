const db = require("../models");
const Education_experiences = db.education_experiences;
const Work_profiles = db.work_profiles;
const Work_profile_education_experiences = db.work_profile_education_experiences;



exports.createJson = (req, res) => {
  
  if (!req.body.level) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const work_profile_education_experiences = {
    educationExperienceId: req.body.educationExperienceId,
    workProfileId: req.body.workProfileId
    
  };

  
  Work_profile_education_experiences.create(work_profile_education_experiences)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Work_profile_education_experiencess."
      });
    });
};



exports.create = (educationExperienceId, workProfileId) => {
  return Work_profile_education_experiences.create({
    
    educationExperienceId: educationExperienceId,
    workProfileId: workProfileId,
  })
    .then((work_profile_education_experiences) => {
      console.log(">> Created users: " + JSON.stringify(work_profile_education_experiences, null, 4));
      return work_profile_education_experiences;
    })
    .catch((err) => {
      console.log(">> Error while creating Work_profile_education_experiencess: ", err);
    });
};




exports.findAllDev_languages = () => {
  return Education_experiences.findAll({
    include: ["work_profile_education_experiences"],
  }).then((education_experiences) => {
    return education_experiences;
  });
};




exports.findAllWork_profiles = () => {
  return Work_profiles.findAll({
    include: ["work_profile_education_experiences"],
  }).then((work_profiles) => {
    return work_profiles;
  });
};



exports.findAll = (req, res) => {
  
  const educationExperienceId = req.query.educationExperienceId;
  var condition = educationExperienceId ? { educationExperienceId: { [Op.like]: `%${educationExperienceId}%` } } : null;

  Work_profile_education_experiences.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Work_profile_education_experiences."
      });
    });
};



exports.findOne = (req, res) => {
  const id = req.params.id;

  Work_profile_education_experiences.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Work_profile_education_experiences with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Work_profile_education_experiences with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Work_profile_education_experiences.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Work_profile_education_experiences was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Work_profile_education_experiences with id=${id}. Maybe Work_profile_education_experiences was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Work_profile_education_experiences with id=" + id
      });
    });
};
