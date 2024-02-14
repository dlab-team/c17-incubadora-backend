const db = require("../models");
const Soft_skills = db.soft_skills;
const Work_profiles = db.work_profiles;
const Work_profile_soft_skills = db.work_profile_soft_skills;


//Crear y guardar nuevos comentarios

exports.createWork_profile_soft_skills = (work_profile_id, soft_skillid) => {
  return Work_profile_soft_skills.create({
    workProfileId: work_profile_id,
    softSkillId: soft_skillid,
  })
    .then((work_profile_soft_skills) => {
      console.log(">> Created work_profile_soft_skills: " + JSON.stringify(work_profile_soft_skills, null, 4));
      return work_profile_soft_skills;
    })
    .catch((err) => {
      console.log(">> Error while creating work_profile_soft_skills: ", err);
    });
};


  // Obtener todos los tutoriales incluyen comentarios

  exports.findAll = () => {
    return Work_profiles.findAll({
      include: ["Work_profile_soft_skills"],
    }).then((work_profiles) => {
      return work_profiles;
    });
  };



  exports.findAll = () => {
    return Soft_skills.findAll({
      include: ["Work_profile_soft_skills"],
    }).then((soft_skills) => {
      return soft_skills;
    });
  };

