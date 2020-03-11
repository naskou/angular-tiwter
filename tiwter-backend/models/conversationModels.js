const mongoose = require('mongoose');

const ConversationSchema = mongoose.Schema({
    participants: [
        {
            senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            reveiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        }
    ]
});

module.exports = mongoose.model('Conversation', ConversationSchema);
