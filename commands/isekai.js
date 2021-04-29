
module.exports = {

    name:'isekai',
    aliases:['otherworld','differentworld'],
    description:"It's a genre which involve the main character being transported into another world via either reincarnation, summoning, or a god transmigrating them.",
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Isekai**')
        .setDescription("The main character is transported into another world via either reincarnation, summoning, or a god transmigrating them.")
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        
        .addFields(
            {
                name:"**:tv: Re:Zer0 - Starting Life In Another World**",
                value:"Episodes-25+"
            },
            {
                name:"**:tv: Kono Subarashii Sekai ni Shukufuku wo!(Konosuba)**",
                value:"Episodes-20+"
            },
            {
                name:"**:tv: Sword Art Online**",
                value:"Episodes-80+"
            },
            {
                name:"**:tv: Mushoku Tensei: Jobless Reincarnation**",
                value:"Episodes-14+"
            },
            {
                name:"**:tv: The Rising of the Shield Hero**",
                value:"Episodes-25+"
            },
            {
                name:"**:tv: Overlord**",
                value:"Episodes-30+"
            },
            {
                name:"**:tv: No Game No Life**",
                value:"Episodes-12+"
            },
            {
                name:"**:tv: Ascendance of a Bookworm**",
                value:"Episodes-28+"
            },
            {
                name:"**:tv: Log Horizon**",
                value:"Episodes-50+"
            },
            {
                name:"**:tv: That time I got Incarnated as a slime**",
                value:"Episodes-24+"
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}