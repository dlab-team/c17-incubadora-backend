module.exports = (sequelize, DataTypes) => {
    const User_statuses = sequelize.define("user_statuses", {
      name: {
        type: DataTypes.STRING
      },
      
    });
  
    return User_statuses;
  };