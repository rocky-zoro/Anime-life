
module.exports = {

    name:'drama',
    aliases:['crime'],
    description:'A state, situation, or series of events involving interesting or intense conflict of forces',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('**Drama**')
        .setDescription('A state, situation, or series of events involving interesting or intense conflict of forces')
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        
        .addFields(
            {
                name:"**:tv: Shingeki no Kyojin**",
                value:"Episodes-25+"
            },
            {
                name:"**:tv: Code Geass: Hangyaku no Lelouch**",
                value:"Episodes-25+"
            },
            {
                name:"**:tv: Re-Zero**",
                value:"Episodes-50+"
            },
            {
                name:"**:tv: Cowboy Bebop**",
                value:"Episodes-26+"
            },
            {
                name:"**:tv: Death Parade**",
                value:"Episodes-12+"
            },
            {
                name:"**:tv: Elfen Lied**",
                value:"Episodes-13+"
            },
            {
                name:"**:tv: Darling in the FranXX**",
                value:"Episodes-24+"
            },
            {
                name:"**:tv: Tate no Yuusha no Nariagari**",
                value:"Episodes-25+"
            },
            {
                name:"**:tv: Owari no Seraph**",
                value:"Episodes-12+"
            },
            {
                name:"**:tv: Golden Time**",
                value:"Episodes-25+"
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}