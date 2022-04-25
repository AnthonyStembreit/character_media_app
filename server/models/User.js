const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init(
    {
        id:{},
        email:{},
        password:{},
        firstName:{},
        lastName:{},
    }
)

module.exports = User;
