
module.exports = {

    name:'sci-fi',
    aliases:['mecha','shounenai'],
    description:"It's a genre that incorporates future technology, or at least technology we don't have yet. E.g. Spaceships, flying cars, teleportation etc",
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Sci-fi**')
        .setDescription("It's a genre that features futuristic technology, or at the very least technology that we don't yet have. For example, spaceships, flying cars, and teleportation.")
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        .addFields(
            {
                name:"**:tv: Steins;Gate**",
                value:"Episodes-24+"
            },
            {
                name:"**:tv: Kiseijuu: Sei no Kakuritsu**",
                value:"Episodes-24+"
            },
            {
                name:"**:tv: Cowboy bepop**",
                value:"Episodes-26+"
            },
            {
                name:"**:tv: Neon Genesis Evangelion**",
                value:"Episodes-26+"
            },
            {
                name:"**:tv: Guilty Crown**",
                value:"Episodes-22+"
            },
            {
                name:"**:tv: Mahouka Koukou no Rettousei**",
                value:"Episodes-26+"
            },
            {
                name:"**:tv: Darker than Black: Kuro no Keiyakusha**",
                value:"Episodes-25+"
            },
            {
                name:"**:tv: Date A Live**",
                value:"Episodes-12+"
            },
            {
                name:"**:tv: Space☆Dandy**",
                value:"Episodes-13+"
            },
            {
                name:"**:tv: Ginga Eiyuu Densetsu**",
                value:"Episodes-110+"
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}