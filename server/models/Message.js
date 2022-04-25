const { Model, DataTypes } = require('sequelize');

class Message extends Model {}

Message.init(
    {
        id:{},
    }
)

module.exports = Message;