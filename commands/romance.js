
module.exports = {

    name:'romance',
    aliases:[],
    description:'Romance (love), emotional attraction towards another person and the courtship behaviors undertaken to express the feelings.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Romance**')
        .setDescription('Romance is emotional attraction towards another person and the courtship behaviors undertaken to express the feelings.')
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        .addFields(
            
            {
                name:"**:tv: Clannad**",
                value:"Episodes-23+"
            },
            {
                name:"**:tv: Toradora**",
                value:"Episodes-25"
            },
            {
                name:"**:tv: Shigatsu wa kimi no Uso**",
                value:"Episodes-22"
            },
            {
                name:"**:tv: Ore Monogatari!!**",
                value:"Episodes-24"
            },
            {
                name:"**:tv: Kaichou wa maid sama**",
                value:"Episodes-26"
            },
            {
                name:"**:tv: Ouran Koukou Host Club**",
                value:"Episodes-26"
            },
            {
                name:"**:tv: Tonari no Kaibutsu-kun**",
                value:"Episodes-13"
            },
            {
                name:"**:tv: Violet Evergarden**",
                value:"Episodes-13+"
            },
            {
                name:"**:tv: Darling in the FranXX**",
                value:"Episodes-24+"
            },
            {
                name:"**:tv: Kaguya-Sama Love is war**",
                value:"Episodes-24+"
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}