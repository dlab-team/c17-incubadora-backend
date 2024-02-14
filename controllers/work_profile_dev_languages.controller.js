const db = require("../models");
const Dev_languages = db.dev_languages;
const Work_profiles = db.work_profiles;
const Work_profile_dev_languages = db.work_profile_dev_languages;


//Crear y guardar nuevos comentarios

exports.createWork_profile_dev_languages = (work_profile_Id, dev_language_Id, work_profile_dev_languages) => {
  return Work_profile_dev_languages.create({
    level: work_profile_dev_languages.level,
    workProfileId: work_profile_Id,
    devLanguageId: dev_language_Id,
    
  })
    .then((work_profile_dev_languages) => {
      console.log(">> Created work_profile_dev_languages: " + JSON.stringify(work_profile_dev_languages, null, 4));
      return work_profile_dev_languages;
    })
    .catch((err) => {
      console.log(">> Error while creating work_profile_dev_languages: ", err);
    });
};


// Obtener todos los tutoriales incluyen comentarios

exports.findAllDev_languages = () => {
  return Dev_languages.findAll({
    include: ["work_profile_dev_languages"],
  }).then((dev_languages) => {
    return dev_languages;
  });
};




exports.findAllWork_profiles = () => {
  return Work_profiles.findAll({
    include: ["work_profile_dev_languages"],
  }).then((work_profiles) => {
    return work_profiles;
  });
};

