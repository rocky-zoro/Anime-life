const { MessageEmbed } = require("discord.js")

module.exports = {

    name:'support',
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle("Support us on Pateron","patreon.com/anili")
        .setDescription("I want to create a game engine called Anili Engine, and I need your help to do so. You can find more details about Pateron benefits here.\n patreon.com/anili")
        .setFooter("Support us")
        .setImage("https://imgur.com/sVe7Zac.jpg")
        message.channel.send(newEmbed);
    }
}