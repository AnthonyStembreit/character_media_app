const { Schema, model } = require('mongoose');

const franchiseSchema = new Schema(
    {
        search_term: {
            type: String,
            required: true,
            unique: true
        },
        presented_name: {
            type: String,
            required: true,
            unique: true
        },
        eras: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Era',
            },
        ],
    },
    {
        toJSON: {
            getters: true
        },
    }
);

const Franchise = model('Franchise', franchiseSchema);

module.exports = Franchise;
