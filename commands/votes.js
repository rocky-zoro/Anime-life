const { MessageEmbed } = require("discord.js")

module.exports = {

    name:'support',
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle("Vote Support")
        .setDescription("Support us on these two sites by clicking on the link.")
        .addFields(
            

        )
        .setFooter("Support us")
        .setImage("https://imgur.com/sVe7Zac")
        message.channel.send(newEmbed);
    }
}