
module.exports = {

    name:'horror',
    aliases:['dementia'],
    description:'An extremely strong feeling of fear and shock, or the frightening by the animations,sudden moments...',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Horror**')
        .setDescription('An extremely strong feeling of fear and shock, or the frightening by the animations,sudden moments...')
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        
        .addFields(
            {
                name:"**:tv: Tokyo Ghoul**",
                value:"Episodes- 12+"
            },
            {
                name:"**:tv: Kiseijuu: Sei no Kakuritsu**",
                value:"Episodes- 24+"
            },
            {
                name:"**:tv: Another**",
                value:"Episodes- 12+"
            },
            {
                name:"**:tv: Elfen Lied**",
                value:"Episodes-13+"
            },
            {
                name:"**:tv: Deadman Wonderland**",
                value:"Episodes- 12+"
            },
            {
                name:"**:tv: Hellsing Ultimate**",
                value:"Episodes- 10+"
            },
            {
                name:"**:tv: Monster**",
                value:"Episodes- 74"
            },
            {
                name:"**:tv: Higurashi no Naku Koro ni**",
                value:"Episodes- 26+"
            },
            {
                name:"**:tv: Akira**",
                value:"Episodes- 10+"
            },
            {
                name:"**:tv: Berserk**",
                value:"Episodes- 25+"
            },
        )

        message.channel.send(newEmbed);

        
        
    }
}