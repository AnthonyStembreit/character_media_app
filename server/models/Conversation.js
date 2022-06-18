const { Schema, model } = require('mongoose');

const conversationSchema = new Schema(
    {
        name: {
            type: String,
            required: false
        },
        participants: [
            {
                type: Schema.Types.ObjectId,
                ref: 'UserCharacterMap',
            }
        ],
        messages: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Message',
            }
        ],
        // lastModified: {
        //     type: Date,
        // }
    },
    {
        toJSON: {
            getters: true
        },
    }
);

const Conversation = model('Conversation', conversationSchema);

module.exports = Conversation;