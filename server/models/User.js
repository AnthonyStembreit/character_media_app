const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            // email validation
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            // password length? validataion
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
    },
    {
        // hooks:{}
        sequelize,
        freezeTableName: true,
        modelName: 'user'
    }
)

module.exports = User;
