module.exports = (sequelize, DataTypes) => {
    const Soft_skills = sequelize.define("soft_skills", {
      name: {
        type: DataTypes.STRING
      },
      
    });
  
    return Soft_skills;
  };