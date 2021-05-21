const { MessageEmbed } = require("discord.js")

module.exports = {

    name:'vote',
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle("Vote Support")
        .setDescription("Support us on these two sites by clicking on the link.")
        .addFields(
            {
            name: "Discord Bot List",
            value:"discord.ly/anime-life"
        
            }         

        )
        .setFooter("Support us")
        message.channel.send(newEmbed);
    }
}