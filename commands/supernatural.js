
module.exports = {

    name:'supernatural',
    description:'Its a genre about forces that cannot be explained by science mainly associated with magic, and even Shounen from time to time.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Supernatural**')
        .setDescription("Forces that cannot be explained by science mainly associated with magic, and even Shounen from time to time.")
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        
        .addFields(
            {
                name:"**:tv: Death Note**",
                value:"Episodes- 37+"
            },
            {
                name:"**:tv: One Punch Man**",
                value:"Episodes-12+"
            },
            {
                name:"**:tv: No Game No Life**",
                value:"Episodes- 12"
            },
            {
                name:"**:tv: Noragami**",
                value:"Episodes-12+"
            },
            {
                name:"**:tv: Mirai Nikki**",
                value:"Episodes- 26+"
            },
            {
                name:"**:tv: Angel Beats**",
                value:"Episodes- 13+"
            },
            {
                name:"**:tv: Kimetsu no yaiba**",
                value:"Episodes- 26+"
            },
            {
                name:"**:tv: Ao no Exorcist**",
                value:"Episodes-25+"
            },
            {
                name:"**:tv: Bleach**",
                value:"Episodes- 366+"
            },
            {
                name:"**:tv: Another**",
                value:"Episodes- 12+"
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}