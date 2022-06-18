const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
  {
    body: {
      type: String,
      required: true
    },
    sent_by: {
      type: Schema.Types.ObjectId,
      ref: 'UserCharacterMap',
      required: true
    },
    createdAt: {
      type: Date,
      default:  Date.now()
    }
  },
  {
    toJSON: {
      getters: true
    },
  }
);

const Message = model('Message', messageSchema);

module.exports = Message;