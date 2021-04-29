
module.exports = {

    name:'adventure',
    aliases:['action'],
    description:'In this the main and the  other characters embark on a journey facing obstacles, some of them on a mission, some have their own purposes.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Adventure**')
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        .setDescription('The characters in the series are typically on some kind of journey, traveling in an unfamiliar territory and working towards some kind of goal.')
        
        .addFields(
            {
                name:"**:tv: Naruto**",
                value:"Episodes-720+"
            },
            {
                name:"**:tv: Hunter x Hunter**",
                value:"Episodes-148"
            },
            {
                name:"**:tv: Akame ga kill**",
                value:"Episodes-24"
            },
            {
                name:"**:tv: One piece**",
                value:"Episodes-1000+"
            },
            {
                name:"**:tv: Tengen Toppa Gurren Lagann**",
                value:"Episodes-27"
            },
            {
                name:"**:tv: JoJo's Bizarre Adventure**",
                value:"Episodes-50+"
            },
            {
                name:"**:tv: Dr. Stone**",
                value:"Episodes-24+"
            },
            {
                name:"**:tv: Samurai Champloo**",
                value:"Episodes- 26+"
            },
            {
                name:"**:tv: Made in Abyss**",
                value:"Episodes-26"
            },
            {
                name:"**:tv: Vinland Saga**",
                value:"Episodes-24+"
            },
        );
        message.channel.send(newEmbed);

        
        
    }
}