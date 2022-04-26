const { Model, DataTypes } = require('sequelize');

class Message extends Model {}

Message.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1],
            },
          },
        //   sender
        // recipient
        // has read?
        
    },
    {
        // hooks
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'message'
    }
)

module.exports = Message;