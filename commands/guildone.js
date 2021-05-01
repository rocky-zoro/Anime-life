
module.exports = {

    name:'botisgoodwejustneedmorestuff',
    description:'bot info',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Bot info**')
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')

        .addFields(
            {
                name:"**:tv: Guilds Count**",
                value:`${client.guilds.cache.size}`
            },
            {
                name:"**:tv: Users Count**",
                value:`${client.users.cache.size}`
            },
            
            {
                name:"**:tv: Channels Count**",
                value:`${client.channels.cache.size}`
            },
            {
                name:"**:tv: Emojis Count**",
                value:`${client.emojis.cache.size}`
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}
