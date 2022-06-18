const { Schema, model } = require('mongoose');

const eraSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }
        //require franchise here??
    },
    {
        toJSON: {
            getters: true
        },
    }
);

const Era = model('Era', eraSchema);

module.exports = Era;