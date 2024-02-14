module.exports = (sequelize, DataTypes) => {
  const Work_profile_dev_languages= sequelize.define("work_profile_dev_languages", {
    level: {
      type: DataTypes.STRING,
  },
});
  
    return Work_profile_dev_languages;
};