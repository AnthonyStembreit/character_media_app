const { Schema, model } = require('mongoose');



const resetTokenSchema = new Schema(
    {
        email: {
            type: String,
            minlength: 1,
            maxlength: 280
        },
        expiration: {
            type: Date,
            expires: 7200, 
            default: Date.now()
        },
        token: {
            type: String,
        },
        used: {
            type: Number,
            allowNull: false,
            default: 0
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: true,
    }
);

const ResetToken = model('ResetToken', resetTokenSchema);

module.exports = ResetToken;
