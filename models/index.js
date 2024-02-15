const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.roles = require("./roles.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);
db.user_statuses = require("./user_statuses.model.js")(sequelize, Sequelize);
db.work_profiles = require("./work_profiles.model.js")(sequelize, Sequelize);
db.work_profile_databases = require("./work_profile_databases.model.js")(sequelize, Sequelize);
db.databases = require("./databases.model.js")(sequelize, Sequelize);
db.dev_languages = require("./dev_languages.model.js")(sequelize, Sequelize);
db.work_profile_dev_languages = require("./work_profile_dev_languages.model.js")(sequelize, Sequelize);
db.education_experiences = require("./education_experiences.model.js")(sequelize, Sequelize);
db.work_profile_education_experiences = require("./work_profile_education_experiences.model.js")(sequelize, Sequelize);
db.soft_skills = require("./soft_skills.model.js")(sequelize, Sequelize);
db.work_profile_soft_skills = require("./work_profile_soft_skills.model.js")(sequelize, Sequelize);
db.tools = require("./tools.model.js")(sequelize, Sequelize);
db.work_profile_tools = require("./work_profile_tools.model.js")(sequelize, Sequelize);



db.roles.hasMany(db.users, { as: "userss" });
db.users.belongsTo(db.roles, {
  foreignKey: "roleId",
  as: "role",

  });

db.user_statuses.hasMany(db.users, { as: "userss" });
db.users.belongsTo(db.user_statuses, {
  foreignKey: "userStatusId",
  as: "user_statuse",

  });


db.users.hasMany(db.work_profiles, { as: "work_profiless" });
db.work_profiles.belongsTo(db.users, {
  foreignKey: "userId",
  as: "user",

  });


db.work_profiles.hasMany(db.work_profile_databases, { as: "work_profile_databases" });
db.work_profile_databases.belongsTo(db.work_profiles, {
  foreignKey: "workProfileId",
  as: "work_profi",

  });



db.databases.hasMany(db.work_profile_databases, { as: "work_profile_database" });
db.work_profile_databases.belongsTo(db.databases, {
  foreignKey: "databaseId",
  as: "database",

  });




db.dev_languages.hasMany(db.work_profile_dev_languages, { as: "work_profile_dev_language" });
db.work_profile_dev_languages.belongsTo(db.dev_languages, {
  foreignKey: "devLanguageId",
  as: "dev_language",

  });


db.work_profiles.hasMany(db.work_profile_dev_languages, { as: "work_profile_dev_languages" });
db.work_profile_dev_languages.belongsTo(db.work_profiles, {
  foreignKey: "workProfileId",
  as: "work_profiles",

  });


db.education_experiences.hasMany(db.work_profile_education_experiences, { as: "work_profile_education_experience" });
db.work_profile_education_experiences.belongsTo(db.education_experiences, {
  foreignKey: "educationExperienceId",
  as: "education_experience",

  });


db.work_profiles.hasMany(db.work_profile_education_experiences, { as: "work_profile_education_experiences" });
db.work_profile_education_experiences.belongsTo(db.work_profiles, {
  foreignKey: "workProfileId",
  as: "work_profile",

  });





db.soft_skills.hasMany(db.work_profile_soft_skills, { as: "work_profile_soft_skill" });
db.work_profile_soft_skills.belongsTo(db.soft_skills, {
foreignKey: "softSkillId",
as: "soft_skill",

});


db.work_profiles.hasMany(db.work_profile_soft_skills, { as: "work_profile_soft_skills" });
db.work_profile_soft_skills.belongsTo(db.work_profiles, {
foreignKey: "workProfileId",
as: "work_profiles",

});




  

db.work_profiles.hasMany(db.work_profile_tools, { as: "work_profile_tools" });
db.work_profile_tools.belongsTo(db.work_profiles, {
  foreignKey: "workProfileId",
  as: "work_prof",

  });


  
db.tools.hasMany(db.work_profile_tools, { as: "work_profile_tool" });
db.work_profile_tools.belongsTo(db.tools, {
  foreignKey: "toolId",
  as: "tool",

  });


module.exports = db;