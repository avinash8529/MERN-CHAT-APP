const mongoose = require('mongoose')

const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true
    }

);

const Chat = mongoose.model("Chat",chatModel);

module.exports = Chat;

//chatName
//isGroupChat
//users
//groupDmin
//latest message
//these all refering to live status of our chat and user and this is basically a table
// creation in database using mongoose