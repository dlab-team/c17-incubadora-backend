const db = require("../models");
const Users = db.users;
const Work_profiles = db.work_profiles;

//Crear y guardar nuevos comentarios

exports.createWork_profiles = (UsersId, work_profiles) => {
  return Work_profiles.create({
    gender: work_profiles.gender,
    phone_number: work_profiles.phone_number,
    city: work_profiles.city,
    country: work_profiles.country,
    education_status: work_profiles.education_status,
    english_level: work_profiles.english_level,
    cv_url: work_profiles.cv_url,
    linkedin_url: work_profiles.linkedin_url,
    github_url: work_profiles.github_url,
    featured_project: work_profiles.featured_project,
    work_availability: work_profiles.work_availability,
    dev_experience: work_profiles.dev_experience,
    educational_level: work_profiles.educational_level,
    comment: work_profiles.comment,
    ideal_work_comment: work_profiles.ideal_work_comment,
    relocation_option: work_profiles.relocation_option,
    visa: work_profiles.visa,
    design: work_profiles.design,
    userId: UsersId,
  })
    .then((work_profiles) => {
      console.log(">> Created work_profiles: " + JSON.stringify(work_profiles, null, 4));
      return work_profiles;
    })
    .catch((err) => {
      console.log(">> Error while creating work_profiles: ", err);
    });
};


  // Obtener todos los tutoriales incluyen comentarios

  exports.findAll = () => {
    return Users.findAll({
      include: ["work_profiles"],
    }).then((users) => {
      return users;
    });
  };

