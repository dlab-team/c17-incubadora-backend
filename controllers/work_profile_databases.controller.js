const db = require("../models");
const Work_profiles = db.work_profiles;
const Work_profile_databases = db.work_profile_databases;


//Crear y guardar nuevos comentarios

exports.creatework_profile_databases = (work_profile_id, databaseid, work_profile_databases) => {
  return Work_profile_databases.create({
    level: work_profile_databases.level,
    workProfileId: work_profile_id,
    databaseId: databaseid,
  })
    .then((work_profile_databases) => {
      console.log(">> Created work_profile_databases: " + JSON.stringify(work_profile_databases, null, 4));
      return work_profile_databases;
    })
    .catch((err) => {
      console.log(">> Error while creating work_profile_databases: ", err);
    });
};


  // Obtener todos los tutoriales incluyen comentarios

  exports.findAll = () => {
    return Work_profiles.findAll({
      include: ["work_profile_databases"],
    }).then((work_profiles) => {
      return work_profiles;
    });
  };

