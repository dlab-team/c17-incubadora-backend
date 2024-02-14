module.exports = (sequelize, DataTypes) => {
  const Work_profiles = sequelize.define("work_profiles", {
    gender: {
        type: DataTypes.STRING,
    },
    phone_number: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    country: {
        type: DataTypes.STRING,
    },
    education_status: {
        type: DataTypes.STRING,
    },
    english_level: {
        type: DataTypes.STRING,
    },
    cv_url: {
        type: DataTypes.STRING,
    },
    linkedin_url: {
        type: DataTypes.STRING,
    },
    github_url: {
        type: DataTypes.STRING,
    },
    featured_project: {
        type: DataTypes.STRING,
    },
    work_availability: {
        type: DataTypes.STRING,
    },
    dev_experience: {
        type: DataTypes.STRING,
    },
    educational_level: {
        type: DataTypes.STRING,
    },
    comment: {
        type: DataTypes.STRING,
    },
    ideal_work_comment: {
        type: DataTypes.STRING,
    },
    relocation_option: {
        type: DataTypes.STRING,
    },
    visa: {
        type: DataTypes.STRING,
    },
    design: {
        type: DataTypes.STRING,
    },

});
  
    return Work_profiles;
};