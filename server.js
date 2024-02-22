

const Roles = require("./controllers/roles.controller");
const Users = require("./controllers/users.controller");
const User_statuses = require("./controllers/user_statuses.controller");
const Work_profiles = require("./controllers/work_profiles.controller");
const Work_profile_databases = require("./controllers/work_profile_databases.controller");
const Databases = require("./controllers/databases.controller");
const Work_profile_dev_languages = require("./controllers/work_profile_dev_languages.controller");
const Dev_languages = require("./controllers/dev_languages.controller");
const Education_experiences = require("./controllers/education_experiences.controller");
const Work_profile_education_experiences = require("./controllers/work_profile_education_experiences.controller");
const Soft_skills = require("./controllers/soft_skills.controller");
const Work_profile_soft_skills = require("./controllers/work_profile_soft_skills.controller");
const Tools = require("./controllers/tools.controller");
const Work_profile_tools = require("./controllers/work_profile_tools.controller");


const run = async () => {

  const rol1 = await Roles.create({
    name: "Rol#1"
    
  });
  
  const rol2 = await Roles.create({
    name: "Rol#2"
  });
  
  
  
  const user_statuses1 = await User_statuses.create({
    name: "User_statuses#1",
    
  });
  
  const user_statuses2 = await User_statuses.create({
    name: "User_statuses#2",
  });
  
  
  
  
  const soft_skills1 = await Soft_skills.create({
    name: "Soft_skills#1",
    
  });
  
  const soft_skills2 = await Soft_skills.create({
    name: "Soft_skills#2",
  });
  
  
  
  
  
  const education_experiences1 = await Education_experiences.create({
    institute_name: "institute_name#1",
    type: "type#1",
    area: "area#1",
    name: "Education_experiences#1",
    graduation_year: "graduation_year#1",
    
  });
  
  const education_experiences2 = await Education_experiences.create({
    institute_name: "institute_name#2",
    type: "type#2",
    area: "area#2",
    name: "Education_experiences#2",
    graduation_year: "graduation_year#2",
  });
  
  
  
  const databases1 = await Databases.create({
    name: "Databases#1",
    
  });
  
  const databases2 = await Databases.create({
    name: "Databases#2",
  });
  
  
  const dev_languages1 = await Dev_languages.create({
    name: "Dev_languages#1",
    
  });
  
  const dev_languages2 = await Dev_languages.create({
    name: "Dev_languages#2",
  });
  
  
  
  
  const tools1 = await Tools.create({
    name: "Tools#1",
    
  });
  
  const tools2 = await Tools.create({
    name: "Tools#2",
  });
   
  
  
  
  const user1 = await Users.create(rol1.id, user_statuses1.id, {
    name: "user#1",
    last_name: "last_name#1",
    email: "email#1",
    password: "password#1",
    
  });
  

  const user2 = await Users.create(rol2.id, user_statuses2.id, {
    name: "user#3",
    last_name: "last_name#3",
    email: "email#3",
    password: "password#3",
  });
  
  
  
  
  const work_profiles1 = await Work_profiles.create(user1.id,  {
    gender: "gender#1",
    phone_number: "phone_number#1",
    city: "city#1",
    country: "country#1",
    education_status: "education_status#1",
    english_level: "english_level#1",
    cv_url: "cv_url#1",
    linkedin_url: "linkedin_url#1",
    github_url: "github_url#1",
    featured_project: "featured_project#1",
    work_availability: "work_availability#1",
    dev_experience: "dev_experience#1",
    educational_level: "educational_level#1",
    comment: "comment#1",
    ideal_work_comment: "ideal_work_comment#1",
    relocation_option: "relocation_option#1",
    visa: "visa#1",
    design: "design#1",
    
  });
  
  const work_profiles2 = await Work_profiles.create(user2.id,  {
    gender: "gender#2",
    phone_number: "phone_number#2",
    city: "city#2",
    country: "country#2",
    education_status: "education_status#2",
    english_level: "english_level#2",
    cv_url: "cv_url#2",
    linkedin_url: "linkedin_url#2",
    github_url: "github_url#2",
    featured_project: "featured_project#2",
    work_availability: "work_availability#2",
    dev_experience: "dev_experience#2",
    educational_level: "educational_level#2",
    comment: "comment#2",
    ideal_work_comment: "ideal_work_comment#2",
    relocation_option: "relocation_option#2",
    visa: "visa#2",
    design: "design#2",
  });
  
  
  
  
  const Work_profile_databases1 = await Work_profile_databases.create(work_profiles1.id, databases1.id,  {
    level: "level#1",
  });
  
  const Work_profile_databases2 = await Work_profile_databases.create(work_profiles2.id, databases2.id, {
    level: "level#2",
  });
  
  
  
  
  const Work_profile_dev_languages1 = await Work_profile_dev_languages.create(work_profiles1.id, dev_languages1.id,  {
    level: "level#1",
  });
  
  const Work_profile_dev_languages2 = await Work_profile_dev_languages.create(work_profiles2.id, dev_languages2.id, {
    level: "level#2",
  });
  
  
  
  
  const Work_profile_education_experiences1 = await Work_profile_education_experiences.create(education_experiences1.id, work_profiles1.id);
  
  const Work_profile_education_experiences2 = await Work_profile_education_experiences.create(education_experiences2.id, work_profiles2.id);
  
  
  
  const work_profile_soft_skills1 = await Work_profile_soft_skills.create(work_profiles1.id, soft_skills1.id);
  
  const work_profile_soft_skills2 = await Work_profile_soft_skills.create(work_profiles2.id, soft_skills2.id);
  
  
  
  
  
  
  const work_profile_tools1 = await Work_profile_tools.create(work_profiles1.id, tools1.id);
  
  const work_profile_tools2 = await Work_profile_tools.create(work_profiles2.id, tools2.id);
  
  
  
  
  };
  


const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
});


var corsOptions = {
  origin: "http://localhost:8083" // web
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome backend c17-incubadora." });
});


require("./routes/databases.routes")(app);
require("./routes/dev_languages.routes")(app);
require("./routes/education_experiences.routes")(app);
require("./routes/roles.routes")(app);
require("./routes/soft_skills.routes")(app);
require("./routes/tools.routes")(app);
require("./routes/user_statuses.routes")(app);
require("./routes/users.routes")(app);
require("./routes/work_profile_databases.routes")(app);
require("./routes/work_profile_dev_languages.routes")(app);
require("./routes/work_profile_education_experiences.routes")(app);
require("./routes/work_profile_soft_skills.routes")(app);
require("./routes/work_profile_tools.routes")(app);
require("./routes/work_profiles.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8082; // api
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});