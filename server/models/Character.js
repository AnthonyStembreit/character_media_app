const { Schema, model } = require('mongoose');

const characterSchema = new Schema(
    {
        first_name: {
            type: String,
            minLength: 1,
            maxLength: 100,
            required: true
        },
        last_name: {
            type: String,
            minLength: 1,
            maxLength: 100,
        },
        presented_name: {
            type: String,
            minLength: 1,
            maxLength: 100,
            required: true
        },
        img_url: {
            type: String,
            minLength: 10
        },
        looking_for: {
            type: String,
            minLength: 5
        },
        description: {
            type: String,
            minLength: 5
        },
        age: {
            type: Number
        },
        background_story: {
            type: String,
            minLength: 5
        },
        campaign_name: {
            type: String
        },
        franchise: {
            type: Schema.Types.ObjectId,
            ref: 'Franchise',
        },
        specific_era: {
            type: Schema.Types.ObjectId,
            ref: 'Era',
        },
        conversations: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Conversation',
            }
        ],
        user:{
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        private: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        toJSON: {
            getters: true
        },
    }
);

const Character = model('Character', characterSchema);

module.exports = Character;