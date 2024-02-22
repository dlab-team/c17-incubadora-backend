const db = require("../models");
const Users = db.users;
const Roles = db.roles;




exports.createJson = (req, res) => {
  
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  const users = {
    name: req.body.name,
    last_name: req.body.last_name,
    email: req.body.email,
    roleId: req.body.roleId,
    userStatusId: req.body.userStatusId
    
  };

  Users.create(users)
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




exports.create = (roleId, user_statusesId, users) => {
  return Users.create({
    name: users.name,
    last_name: users.last_name,
    email: users.email,
    password: users.password,
    roleId: roleId,
    userStatusId: user_statusesId,
  })
    .then((users) => {
      console.log(">> Created users: " + JSON.stringify(users, null, 4));
      return users;
    })
    .catch((err) => {
      console.log(">> Error while creating users: ", err);
    });
};


  

  exports.findAllRolesUsers = () => {
    return Roles.findAll({
      include: ["users"],
    }).then((roles) => {
      return roles;
    });
  };



  exports.findAll = (req, res) => {
  
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Users.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Userss."
        });
      });
  };
  
  
  
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Users.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Users with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Users with id=" + id
        });
      });
  };
  
  
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Users.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Users was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Users with id=${id}. Maybe Users was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Users with id=" + id
        });
      });
  };
  
  

  
  

  
  
  
  






