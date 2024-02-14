
const db = require("../models");
const Soft_skills = db.soft_skills;
const Op = db.Sequelize.Op;



exports.createSoft_skills = (soft_skills) => {
  return Soft_skills.create({
    name: soft_skills.name,
  })
    .then((soft_skills) => {
      console.log(">> Created soft_skills: " + JSON.stringify(soft_skills, null, 4));
      return soft_skills;
    })
    .catch((err) => {
      console.log(">> Error while creating soft_skills: ", err);
    });
};



exports.findAll = (req, res) => {
  
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Soft_skills.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving soft_skillss."
      });
    });
};



exports.findOne = (req, res) => {
  const id = req.params.id;

  Soft_skills.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find soft_skills with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving soft_skills with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Soft_skills.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "soft_skills was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update soft_skills with id=${id}. Maybe soft_skills was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating soft_skills with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Soft_skills.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "soft_skills was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete soft_skills with id=${id}. Maybe soft_skills was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete soft_skills with id=" + id
      });
    });
};


exports.deleteAll = (req, res) => {
  Soft_skills.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} soft_skillss were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all soft_skillss."
      });
    });
};




exports.findAllPublished = (req, res) => {
  Soft_skills.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving soft_skillss."
      });
    });
};

  