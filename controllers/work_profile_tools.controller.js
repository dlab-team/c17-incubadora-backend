const db = require("../models");
const Tools = db.tools;
const Work_profiles = db.work_profiles;
const Work_profile_tools = db.work_profile_tools;


//Crear y guardar nuevos comentarios

exports.createWork_profile_tools = (work_profile_id, toolsId) => {
  return Work_profile_tools.create({
    workProfileId: work_profile_id,
    toolId: toolsId,
  })
    .then((work_profile_tools) => {
      console.log(">> Created work_profile_tools: " + JSON.stringify(work_profile_tools, null, 4));
      return work_profile_tools;
    })
    .catch((err) => {
      console.log(">> Error while creating work_profile_tools: ", err);
    });
};


  // Obtener todos los tutoriales incluyen comentarios

  exports.findAll = () => {
    return Work_profiles.findAll({
      include: ["Work_profile_tools"],
    }).then((work_profiles) => {
      return work_profiles;
    });
  };



  exports.findAll = () => {
    return Tools.findAll({
      include: ["Work_profile_tools"],
    }).then((tools) => {
      return tools;
    });
  };

