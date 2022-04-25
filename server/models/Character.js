const { Model, DataTypes } = require('sequelize');

class Character extends Model {}

Character.init(
    {
        id:{},
    }
)

module.exports = Character;