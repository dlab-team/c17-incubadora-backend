
const db = require("../models");
const Education_experiences = db.education_experiences;
const Op = db.Sequelize.Op;



exports.createJson = (req, res) => {
  
  if (!req.body.institute_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const education_experiences = {
    institute_name: req.body.institute_name,
    type: req.body.type,
    area: req.body.area,
    name: req.body.name,
    graduation_year: req.body.graduation_year
  };

  
  Education_experiences.create(education_experiences)
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


exports.create = (education_experiences) => {
  return Education_experiences.create({
    institute_name: education_experiences.institute_name,
    type: education_experiences.type,
    area: education_experiences.area,
    name: education_experiences.name,
    graduation_year: education_experiences.graduation_year,
  })
    .then((education_experiences) => {
      console.log(">> Created education_experiences: " + JSON.stringify(education_experiences, null, 4));
      return education_experiences;
    })
    .catch((err) => {
      console.log(">> Error while creating education_experiences: ", err);
    });
};



exports.findAll = (req, res) => {
  
  const institute_name = req.query.institute_name;
  var condition = institute_name ? { institute_name: { [Op.like]: `%${institute_name}%` } } : null;

  Education_experiences.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving education_experiencess."
      });
    });
};



exports.findOne = (req, res) => {
  const id = req.params.id;

  Education_experiences.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find education_experiences with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving education_experiences with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Education_experiences.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "education_experiences was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update education_experiences with id=${id}. Maybe education_experiences was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating education_experiences with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Education_experiences.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "education_experiences was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete education_experiences with id=${id}. Maybe education_experiences was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete education_experiences with id=" + id
      });
    });
};


exports.deleteAll = (req, res) => {
  Education_experiences.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} education_experiencess were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all education_experiencess."
      });
    });
};




exports.findAllPublished = (req, res) => {
  Education_experiences.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving education_experiencess."
      });
    });
};

  