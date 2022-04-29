const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection/config');

class Message extends Model {}

Message.init(
    {
        
          body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1],
            },
          },
          sender_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id',
      },
          },
          recipient_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id',
            },
          }
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