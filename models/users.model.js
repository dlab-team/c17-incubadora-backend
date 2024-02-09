module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("users", {
    name: {
        type: DataTypes.STRING,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },

});
  
    return Users;
};