
module.exports = {

    name:'sliceoflife',
    aliases:['life'],
    description:"Slice of Life portrays day-to-day life, primarily about life, how one goes about it, and how one deals with their problems.",
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Slice of Life**')
        .setDescription("Slice of Life depicts day-to-day life, with a focus on life, how people go about it, and how they deal with problems.")
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        
        .addFields(
            {
                name:"**:tv: Toradora!**",
                value:"Episodes-25+"
            },
            {
                name:"**:tv: Mob Psycho 100**",
                value:"Episodes-12+"
            },
            {
                name:"**:tv: Violet Evergarden**",
                value:"Episodes-13+"
            },
            {
                name:"**:tv: Clannad**",
                value:"Episodes-23+"
            },
            {
                name:"**:tv: Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.**",
                value:"Episodes- 11+"
            },
            {
                name:"**:tv: Hyouka**",
                value:"Episodes-22+"
            },
            {
                name:"**:tv: Kobayashi-san Chi no Maid Dragon**",
                value:"Episodes-13+"
            },
            {
                name:"**:tv: Mushishi**",
                value:"Episodes-26+"
            },
            {
                name:"**:tv: Tenki no Ko**",
                value:"Episodes-10+"
            },
            {
                name:"**:tv: Beastars**",
                value:"Episodes-12+"
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}