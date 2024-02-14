module.exports = (sequelize, DataTypes) => {
    const Dev_languages = sequelize.define("dev_languages", {
      name: {
        type: DataTypes.STRING
      },
      
    });
  
    return Dev_languages;
  };