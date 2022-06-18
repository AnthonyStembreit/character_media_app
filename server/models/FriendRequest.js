const { Schema, model } = require('mongoose');

const friendRequestSchema = new Schema(
    {
        user_id:  {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        message: {
            type: Schema.Types.ObjectId,
            ref: 'Message',
        },
        mutual: {
            type: Boolean,
            default: false
        }
    },
    {
        toJSON: {
            getters: true
        },
    }
);



module.exports = friendRequestSchema;