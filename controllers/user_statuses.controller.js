
const db = require("../models");
const User_statuses = db.user_statuses;

const Op = db.Sequelize.Op;



exports.createJson = (req, res) => {
  
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const user_statuses = {
    name: req.body.name
  };

  
  User_statuses.create(user_statuses)
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


exports.create = (user_statuses) => {
  return User_statuses.create({
    name: user_statuses.name,
  })
    .then((user_statuses) => {
      console.log(">> Created user_statuses: " + JSON.stringify(user_statuses, null, 4));
      return user_statuses;
    })
    .catch((err) => {
      console.log(">> Error while creating user_statuses: ", err);
    });
};



exports.findAll = (req, res) => {
  
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  User_statuses.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user_statusess."
      });
    });
};



exports.findOne = (req, res) => {
  const id = req.params.id;

  User_statuses.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find user_statuses with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving user_statuses with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  User_statuses.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "user_statuses was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update user_statuses with id=${id}. Maybe user_statuses was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating user_statuses with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  User_statuses.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "user_statuses was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete user_statuses with id=${id}. Maybe user_statuses was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete user_statuses with id=" + id
      });
    });
};


exports.deleteAll = (req, res) => {
  User_statuses.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} user_statusess were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all user_statusess."
      });
    });
};




exports.findAllPublished = (req, res) => {
  User_statuses.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user_statusess."
      });
    });
};

  