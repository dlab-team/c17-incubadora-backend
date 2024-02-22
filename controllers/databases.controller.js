
const db = require("../models");
const Databases = db.databases;
const Op = db.Sequelize.Op;




exports.createJson = (req, res) => {
  
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const databases = {
    name: req.body.name
  };

  
  Databases.create(databases)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the databases."
      });
    });
};


exports.create = (databases) => {
  return Databases.create({
    name: databases.name,
  })
    .then((databases) => {
      console.log(">> Created databases: " + JSON.stringify(databases, null, 4));
      return databases;
    })
    .catch((err) => {
      console.log(">> Error while creating databases: ", err);
    });
};



exports.findAll = (req, res) => {
  
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Databases.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving databasess."
      });
    });
};



exports.findOne = (req, res) => {
  const id = req.params.id;

  Databases.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find databases with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving databases with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Databases.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "databases was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update databases with id=${id}. Maybe databases was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating databases with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Databases.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "databases was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete databases with id=${id}. Maybe databases was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete databases with id=" + id
      });
    });
};


exports.deleteAll = (req, res) => {
  Databases.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} databasess were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all databasess."
      });
    });
};




exports.findAllPublished = (req, res) => {
  Databases.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving databasess."
      });
    });
};

  