
module.exports = {

    name:'physchological',
    aliases:['truecrime'],
    description:'Psychological fiction (also psychological realism) is a narrative genre that emphasizes interior characterization and motivation to explore the spiritual, emotional, and mental lives of the character.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Physchological**')
        .setDescription('Psychological fiction is a narrative genre that emphasizes on interior characterization and motivation to explore the spiritual, emotional, and mental lives of the character.')
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        .addFields(
            {
                name:"**:tv: Death Note**",
                value:"Episodes-37+"
            },
            {
                name:"**:tv: Mirai Nikki**",
                value:"Episodes-26+"
            },
            {
                name:"**:tv: Psycho-Pass**",
                value:"Episodes-22+"
            },
            {
                name:"**:tv: Death Parade**",
                value:"Episodes-12+"
            },
            {
                name:"**:tv: Yakusoku no Neverland**",
                value:"Episodes-12+"
            },
            {
                name:"**:tv: Kakegurui**",
                value:"Episodes-12+"
            },
            {
                name:"**:tv: Tokyo Ghoul**",
                value:"Episodes-24+"
            },
            {
                name:"**:tv: Monster**",
                value:"Episodes-74+"
            },
            {
                name:"**:tv: Neon Genesis Evangelion**",
                value:"Episodes-20+"
            },
            {
                name:"**:tv: Zetsuen no Tempest**",
                value:"Episodes-24+"
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}