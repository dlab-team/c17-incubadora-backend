const db = require("../models");
const Roles = db.roles;
const Users = db.users;


//Crear y guardar nuevos comentarios

exports.createUsers = (rolesId, user_statusesId, users) => {
  return Users.create({
    name: users.name,
    last_name: users.last_name,
    email: users.email,
    password: users.password,
    roleId: rolesId,
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


  // Obtener todos los tutoriales incluyen comentarios

  exports.findAll = () => {
    return Roles.findAll({
      include: ["users"],
    }).then((roles) => {
      return roles;
    });
  };

