const db = require("../models");
const Education_experiences = db.education_experiences;
const Work_profiles = db.work_profiles;
const Work_profile_education_experiences = db.work_profile_education_experiences;


//Crear y guardar nuevos comentarios

exports.createWork_profile_education_experiences = (educationExperienceId, workProfileId) => {
  return Work_profile_education_experiences.create({
    
    educationExperienceId: educationExperienceId,
    workProfileId: workProfileId,
  })
    .then((work_profile_education_experiences) => {
      console.log(">> Created users: " + JSON.stringify(work_profile_education_experiences, null, 4));
      return work_profile_education_experiences;
    })
    .catch((err) => {
      console.log(">> Error while creating users: ", err);
    });
};


  // Obtener todos los tutoriales incluyen comentarios

exports.findAllDev_languages = () => {
  return Education_experiences.findAll({
    include: ["work_profile_education_experiences"],
  }).then((education_experiences) => {
    return education_experiences;
  });
};




exports.findAllWork_profiles = () => {
  return Work_profiles.findAll({
    include: ["work_profile_education_experiences"],
  }).then((work_profiles) => {
    return work_profiles;
  });
};
