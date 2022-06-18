const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const friendRequestSchema = require("./FriendRequest")
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            maxLength: 35,
        },
        characters: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Character',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        blocked: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        sent_requests:[friendRequestSchema],
        pending_requests:[friendRequestSchema]
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};
const User = model('User', userSchema);
module.exports = User
