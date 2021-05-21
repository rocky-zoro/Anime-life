const { MessageEmbed } = require("discord.js")

module.exports = {

    name:'vote',
    execute(client, message, args, Discord){
        message.channel.send("**Vote Support**\nSupport us on these two sites by clicking on the link\n\n **Discord Bot List**\nhttps://discord.ly/anime-life")
    }
}