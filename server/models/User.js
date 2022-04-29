const { Model, DataTypes } = require('sequelize');

class User extends Model {
    validPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        
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
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },

            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        freezeTableName: true,
        modelName: 'user'
    }
)

module.exports = User;
