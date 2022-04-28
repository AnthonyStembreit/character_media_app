// Import models here
// schemas here and relationships
const User = require('./User')
const Character = require('./Character')
const Message = require('./Message')

User.hasMany(Character)
User.hasMany(Message) 
// sender
User.hasMany(Message)
// receiver
Character.hasMany(Message)
// sender
Character.hasMany(Message)
// receiver
// Character.belongsTo(User)
// Message.belongsToMany(User)
// Message.belongsToMany(Character)

module.exports = {User, Character, Message};