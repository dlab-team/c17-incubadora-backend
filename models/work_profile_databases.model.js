module.exports = (sequelize, DataTypes) => {
  const Work_profile_databases = sequelize.define("work_profile_databases", {
    level: {
        type: DataTypes.STRING,
    },
});
  
    return Work_profile_databases;
};