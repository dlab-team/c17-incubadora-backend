
const db = require("../models");
const Roles = db.roles;
const Users = db.users;
const Op = db.Sequelize.Op;



exports.create = (roles) => {
  return Roles.create({
    name: roles.name,
  })
    .then((roles) => {
      console.log(">> Created roles: " + JSON.stringify(roles, null, 4));
      return roles;
    })
    .catch((err) => {
      console.log(">> Error while creating roles: ", err);
    });
};



exports.findAll = (req, res) => {
  
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Roles.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Roless."
      });
    });
};



exports.findOne = (req, res) => {
  const id = req.params.id;

  Roles.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Roles with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Roles with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Roles.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Roles was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Roles with id=${id}. Maybe Roles was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Roles with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Roles.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Roles was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Roles with id=${id}. Maybe Roles was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Roles with id=" + id
      });
    });
};


exports.deleteAll = (req, res) => {
  Roles.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Roless were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Roless."
      });
    });
};




exports.findAllPublished = (req, res) => {
  Roles.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Roless."
      });
    });
};

  