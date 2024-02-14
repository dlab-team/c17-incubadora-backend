
const db = require("../models");
const Tools = db.tools;
const Op = db.Sequelize.Op;



exports.createTools = (tools) => {
  return Tools.create({
    name: tools.name,
  })
    .then((tools) => {
      console.log(">> Created tools: " + JSON.stringify(tools, null, 4));
      return tools;
    })
    .catch((err) => {
      console.log(">> Error while creating tools: ", err);
    });
};



exports.findAll = (req, res) => {
  
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Tools.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving toolss."
      });
    });
};



exports.findOne = (req, res) => {
  const id = req.params.id;

  Tools.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find tools with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving tools with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Tools.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "tools was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update tools with id=${id}. Maybe tools was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating tools with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Tools.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "tools was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete tools with id=${id}. Maybe tools was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete tools with id=" + id
      });
    });
};


exports.deleteAll = (req, res) => {
  Tools.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} toolss were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all toolss."
      });
    });
};




exports.findAllPublished = (req, res) => {
  Tools.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving toolss."
      });
    });
};

  