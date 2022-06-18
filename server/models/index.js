// Import models here
// schemas here and relationships
const User = require('./User')
// const Character = require('./Character')
// const Message = require('./Message')
const ResetToken = require('./ResetToken')

// User.hasMany(Character)
// // sender
// User.hasMany(Message, {
//     foreignKey: 'sender_id'
// }) 
// // receiver
// User.hasMany(Message, {
//     foreignKey: 'recipient_id'
// })
// Message.belongsTo(User, {
//     foreignKey: 'sender_id'
// })

// // Will have to research more on how to allow messages to belong to characters as well
// Character.hasMany(Message)
// // sender
// Character.hasMany(Message)
// // receiver
// Character.belongsTo(User)
// // Message.belongsTo(Character)
//Character, Message,
module.exports = {User,  ResetToken};