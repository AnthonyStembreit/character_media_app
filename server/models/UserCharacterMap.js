const { Schema, model } = require('mongoose');

const userCharacterMapSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        character: {
            type: Schema.Types.ObjectId,
            ref: 'Character',
            required: false
        },
    },
    {
        toJSON: {
            getters: true
        },
    }
);

const UserCharacterMap = model('UserCharacterMap', userCharacterMapSchema);

module.exports = UserCharacterMap;