// eslint-disable-next-line no-unused-vars
const { MessageEmbed } = require("discord.js")

module.exports = {

    name:'vote',
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle("Vote Support")
        .setDescription("Support us on these two sites by clicking on the link.")
        .addFields(
            {
                name:"Top.gg",
                value:"https://top.gg/bot/820363426685386783"
            },
            {
            name: "Discord Bot List",
            value:"https://discord.ly/anime-life"
        
            }         

        )
        .setFooter("You can support us by $support")
        message.channel.send(newEmbed);
    }
}