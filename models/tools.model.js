module.exports = (sequelize, DataTypes) => {
    const Tools = sequelize.define("tools", {
      name: {
        type: DataTypes.STRING
      },
      
    });
  
    return Tools;
  };