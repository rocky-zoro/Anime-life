
module.exports = {

    name:'magic',
    aliases:['fairytale'],
    description:"It's use of special powers to make things happen that would usually be impossible. Use characters use magic by wands,grimoire,magic circles, alchemy.....",
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Magic**')
        .setDescription("Characters use magic by wands,grimoire,magic circles, alchemy... they use special powers to make things happen that would usually be impossible")
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        
        .addFields(
            {
                name:"**:tv: Fullmetal Alchemist: Brotherhood**",
                value:"Episodes-64+"
            },
            {
                name:"**:tv: Nanatsu no Taizai**",
                value:"Episodes-24+"
            },
            {
                name:"**:tv: Fairy Tail**",
                value:"Episodes-300+"
            },
            {
                name:"**:tv: Konosuba**",
                value:"Episodes-20+"
            },
            {
                name:"**:tv: Fate/Zero**",
                value:"Episodes-50+"
            },
            {
                name:"**:tv: Overlord**",
                value:"Episodes-20+"
            },
            {
                name:"**:tv: Black Clover**",
                value:"Episodes- 170+"
            },
            {
                name:"**:tv: Log Horizon**",
                value:"Episodes-25+"
            },
            {
                name:"**:tv: Magi**",
                value:"Episodes-50+"
            },
            {
                name:"**:tv: Mahoutsukai no Yome**",
                value:"Episodes-24"
            },
        )

        message.channel.send(newEmbed);

        
        
    }
}