module.exports = (sequelize, DataTypes) => {
    const Education_experiences = sequelize.define("education_experiences", {
      institute_name: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING
      },
      area: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
      },
      graduation_year: {
        type: DataTypes.STRING
      },
      
    });
  
    return Education_experiences;
  };