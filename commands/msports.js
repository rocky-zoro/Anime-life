
module.exports = {

    name:'msports',
    aliases:['msport','mfitness','mangasport','mangasports','mangafitness'],
    description:"It's a genre of Japanese manga and anime that focuses on stories involving sports and other athletic and competitive pursuits.",
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Manga-Sports**')
        .setDescription("It's a genre of Japanese manga and anime that focuses on stories involving sports and other athletic and competitive pursuits.")
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')
        

        .addFields(
            
            {
                name:"**:book: Haikyuu!!**",
                value:"By-Furudate, Haruichi"
            },
            {
                name:"**:book: Slam Dunk**",
                value:"By-Inoue, Takehiko"
            },
            {
                name:"**:book: Air Gear**",
                value:"By-Oh! Great"
            },
            {
                name:"**:book: Kuroko no Basket**",
                value:"By-Fujimaki, Tadatoshi"
            },
            {
                name:"**:book: Eyeshield 21**",
                value:"By-Inagaki, Riichiro"
            },
            {
                name:"**:book: Hajime no Ippo**",
                value:"By-Morikawa, George"
            },
            {
                name:"**:book: Real**",
                value:"By-Inoue, Takehiko"
            },
            {
                name:"**:book: Suzuka**",
                value:"By-Seo, Kouji"
            },
            {
                name:"**:book: Kokou no Hito**",
                value:"By-Sakamoto, Shinichi"
            },
            {
                name:"**:book: Chihayafuru**",
                value:"By-Suetsugu, Yuki"
            },
        )

        message.channel.send(newEmbed);

        
        
    }
}