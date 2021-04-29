
module.exports = {

    name:'mmystery',
    
    aliases:['msuspense','mthriller','mangasuspense','mangathriller','mangamystery'],
    description:'Something that is difficult or impossible to understand or explain that usually involves revealing the character powers, murderer, perpetrator...',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Manga-Mystery**')
        .setDescription("Anything difficult or unlikely to comprehend or describe, which normally entails exposing the character's abilities, killer, or offender.")
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')


        .addFields(
            {
                name:"**:book: Shingeki no Kyojin**",
                value:"By-Isayama, Hajime"
            },
            {
                name:"**:book: Death Note**",
                value:"By-Obata, Takeshi"
            },
            {
                name:"**:book: Tokyo Ghoul**",
                value:"By-Ishida, Sui"
            },
            {
                name:"**:book: Yakusoku no Neverland**",
                value:"By-Demizu, Posuka"
            },
            {
                name:"**:book: Monster**",
                value:"By-Urasawa, Naok"
            },
            {
                name:"**:book: Pandora Hearts**",
                value:"By-Mochizuki, Jun"
            },
            {
                name:"**:book: Tower of God**",
                value:"By-SIU"
            },
            {
                name:"**:book: Kuroshitsuji**",
                value:"By-Toboso, Yana"
            },
            {
                name:"**:book: Mirai Nikki**",
                value:"By-Esuno, Sakae"
            },
            {
                name:"**:book: JoJo no Kimyou na Bouken**",
                value:"By-Araki, Hirohiko"
            },
        )

        message.channel.send(newEmbed);

        
        
    }
}