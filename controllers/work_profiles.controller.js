const db = require("../models");
const Users = db.users;
const Work_profiles = db.work_profiles;



exports.createJson = (req, res) => {
  
  if (!req.body.workProfileId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const work_profiles = {
    gender: req.body.gender,
    phone_number: req.body.phone_number,
    city: req.body.city,
    country: req.body.country,
    education_status: req.body.education_status,
    english_level: req.body.english_level,
    cv_url: req.body.cv_url,
    linkedin_url: req.body.linkedin_url,
    github_url: req.body.github_url,
    featured_project: req.body.featured_project,
    work_availability: req.body.work_availability,
    dev_experience: req.body.dev_experience,
    educational_level: req.body.educational_level,
    comment: req.body.comment,
    ideal_work_comment: req.body.ideal_work_comment,
    relocation_option: req.body.relocation_option,
    visa: req.body.visa,
    design: req.body.design,
    userId: req.body.userId
   
  };

  
  Work_profiles.create(work_profiles)
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



exports.create = (UsersId, work_profiles) => {
  return Work_profiles.create({
    gender: work_profiles.gender,
    phone_number: work_profiles.phone_number,
    city: work_profiles.city,
    country: work_profiles.country,
    education_status: work_profiles.education_status,
    english_level: work_profiles.english_level,
    cv_url: work_profiles.cv_url,
    linkedin_url: work_profiles.linkedin_url,
    github_url: work_profiles.github_url,
    featured_project: work_profiles.featured_project,
    work_availability: work_profiles.work_availability,
    dev_experience: work_profiles.dev_experience,
    educational_level: work_profiles.educational_level,
    comment: work_profiles.comment,
    ideal_work_comment: work_profiles.ideal_work_comment,
    relocation_option: work_profiles.relocation_option,
    visa: work_profiles.visa,
    design: work_profiles.design,
    userId: UsersId,
  })
    .then((work_profiles) => {
      console.log(">> Created work_profiles: " + JSON.stringify(work_profiles, null, 4));
      return work_profiles;
    })
    .catch((err) => {
      console.log(">> Error while creating work_profiles: ", err);
    });
};


  

  exports.findAll = () => {
    return Users.findAll({
      include: ["work_profiles"],
    }).then((users) => {
      return users;
    });
  };




  exports.findAll = (req, res) => {
  
    const comment = req.query.comment;
    var condition = comment ? { comment: { [Op.like]: `%${comment}%` } } : null;
  
    Work_profiles.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Work_profiless."
        });
      });
  };
  
  
  
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Work_profiles.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Work_profiles with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Work_profiles with id=" + id
        });
      });
  };
  
  
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Work_profiles.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Work_profiles was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Work_profiles with id=${id}. Maybe Work_profiles was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Work_profiles with id=" + id
        });
      });
  };

