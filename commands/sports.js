
module.exports = {

    name:'sports',
    aliases:['sport','fitness'],
    description:"It's a genre of Japanese manga and anime that focuses on stories involving sports and other athletic and competitive pursuits.",
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Sports**')
        .setDescription("It's a genre of Japanese manga and anime that focuses on stories involving sports and other athletic and competitive pursuits.")
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        
        .addFields(
            {
                name:"**:tv: Haikyuu**",
                value:"Episodes- 90+"
            },
            
            {
                name:"**:tv: Yowamushi Pedal**",
                value:"Episodes- 38+"
            },
            {
                name:"**:tv: Kuroko no Basket**",
                value:"Episodes-75"
            },
            {
                name:"**:tv: Hajime no Ippo**",
                value:"Episodes- 75+"
            },
            {
                name:"**:tv: Megalo Boc**",
                value:"Episodes- 13"
            },
            {
                name:"**:tv: Free!**",
                value:"Episodes- 26+"
            },
            {
                name:"**:tv: SK∞**",
                value:"Episodes- 12+"
            },
            {
                name:"**:tv: Yuri on Ice **",
                value:"Episodes-12+"
            },
            {
                name:"**:tv: Chihayafuru**",
                value:"Episodes-25+"
            },
            {
                name:"**:tv: Slam Dunk**",
                value:"Episodes-101",                
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}