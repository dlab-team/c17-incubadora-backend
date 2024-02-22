const db = require("../models");
const Dev_languages = db.dev_languages;
const Work_profiles = db.work_profiles;
const Work_profile_dev_languages = db.work_profile_dev_languages;



exports.createJson = (req, res) => {
  
  if (!req.body.level) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const work_profile_dev_languages = {
    level: req.body.level,
    workProfileId: req.body.workProfileId,
    devLanguageId: req.body.devLanguageId
    
  };

  
  Work_profile_dev_languages.create(work_profile_dev_languages)
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



exports.create = (work_profile_Id, dev_language_Id, work_profile_dev_languages) => {
  return Work_profile_dev_languages.create({
    level: work_profile_dev_languages.level,
    workProfileId: work_profile_Id,
    devLanguageId: dev_language_Id,
    
  })
    .then((work_profile_dev_languages) => {
      console.log(">> Created work_profile_dev_languages: " + JSON.stringify(work_profile_dev_languages, null, 4));
      return work_profile_dev_languages;
    })
    .catch((err) => {
      console.log(">> Error while creating work_profile_dev_languages: ", err);
    });
};




exports.findAllDev_languages = () => {
  return Dev_languages.findAll({
    include: ["work_profile_dev_languages"],
  }).then((dev_languages) => {
    return dev_languages;
  });
};




exports.findAllWork_profiles = () => {
  return Work_profiles.findAll({
    include: ["work_profile_dev_languages"],
  }).then((work_profiles) => {
    return work_profiles;
  });
};




exports.findAll = (req, res) => {
  
  const level = req.query.level;
  var condition = level ? { level: { [Op.like]: `%${level}%` } } : null;

  Work_profile_dev_languages.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Work_profile_dev_languagess."
      });
    });
};



exports.findOne = (req, res) => {
  const id = req.params.id;

  Work_profile_dev_languages.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Work_profile_dev_languages with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Work_profile_dev_languages with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Work_profile_dev_languages.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Work_profile_dev_languages was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Work_profile_dev_languages with id=${id}. Maybe Work_profile_dev_languages was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Work_profile_dev_languages with id=" + id
      });
    });
};

