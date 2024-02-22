
const db = require("../models");
const Dev_languages = db.dev_languages;
const Op = db.Sequelize.Op;



exports.createJson = (req, res) => {
  
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const dev_languages = {
    name: req.body.name
  };

  
  Dev_languages.create(dev_languages)
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


exports.create = (dev_languages) => {
  return Dev_languages.create({
    name: dev_languages.name,
  })
    .then((dev_languages) => {
      console.log(">> Created dev_languages: " + JSON.stringify(dev_languages, null, 4));
      return dev_languages;
    })
    .catch((err) => {
      console.log(">> Error while creating dev_languages: ", err);
    });
};



exports.findAll = (req, res) => {
  
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Dev_languages.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving dev_languagess."
      });
    });
};



exports.findOne = (req, res) => {
  const id = req.params.id;

  Dev_languages.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find dev_languages with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving dev_languages with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Dev_languages.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "dev_languages was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update dev_languages with id=${id}. Maybe dev_languages was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating dev_languages with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Dev_languages.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "dev_languages was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete dev_languages with id=${id}. Maybe dev_languages was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete dev_languages with id=" + id
      });
    });
};


exports.deleteAll = (req, res) => {
  Dev_languages.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} dev_languagess were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all dev_languagess."
      });
    });
};




exports.findAllPublished = (req, res) => {
  Dev_languages.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving dev_languagess."
      });
    });
};

  