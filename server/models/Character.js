const { Model, DataTypes } = require('sequelize');

class Character extends Model {}

Character.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        characterName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        characterAge:{
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        characterClass:{
            type: DataTypes.STRING,
            allowNull: true
        },
        characterRace:{
            type: DataTypes.STRING,
            allowNull: true

        },
        franchise:{
            type: DataTypes.STRING,
            allowNull: true

        },
        era:{
            type: DataTypes.STRING,
            allowNull: true

        },
        img_url:{
            type: DataTypes.STRING,
            allowNull: true

        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true

        },
        // adult?
        over18:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        // hooks
        sequelize,
    }
)

module.exports = Character;