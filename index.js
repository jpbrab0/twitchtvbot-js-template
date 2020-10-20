const tmi = require("tmi.js")
const dotenv = require("dotenv").config()

const BotName = "name of bot"
const ChannelName = "channel twitch name"
const opts = {
    identity: {
        username: BotName,
        password: process.env.TOKEN
        },
        channels: [ ChannelName ]
};
const client = new tmi.client(opts)

function recivedMessage(target, context, msg, bot){
    if(bot){
        return
    }
    if(msg == "!command"){
        client.say(target, "command recived.")
    }
}
client.on("message", recivedMessage)
client.on("connected", () => {
    console.log("Bot is on!")
})

client.connect()
