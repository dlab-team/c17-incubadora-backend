module.exports = (sequelize, DataTypes) => {
    const Databases = sequelize.define("databases", {
      name: {
        type: DataTypes.STRING
      },
      
    });
  
    return Databases;
  };