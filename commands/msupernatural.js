
module.exports = {

    name:'msupernatural',
    aliases:['mangasupernatural'],
    description:'Its a genre about forces that cannot be explained by science mainly associated with magic, and even Shounen from time to time.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Manga-Supernatural**')
        .setDescription("Forces that cannot be explained by science mainly associated with magic, and even Shounen from time to time.")
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')
       
        .addFields(
            
            {
                name:"**:book: Kimetsu no Yaiba**",
                value:"By-Gotouge, Koyoharu"
            },
            {
                name:"**:book: Deadman Wonderland**",
                value:"By-Kondou, Kazuma"
            },
            {
                name:"**:book: Gantz**",
                value:"By-Oku, Hiroya"
            },
            {
                name:"**:book: Nanatsu no Taizai**",
                value:"By-Suzuki, Nakaba"
            },
            {
                name:"**:book: JoJo no Kimyou na Bouken**",
                value:"By-Araki, Hirohiko"
            },
            {
                name:"**:book: Soul Eater**",
                value:"By-Ookubo, Atsushi"
            },
            {
                name:"**:book: Ao no Exorcist**",
                value:"By-Katou, Kazue"
            },
            {
                name:"**:book: Jujutsu Kaisen**",
                value:"By-Akutami, Gege"
            },
            {
                name:"**:book: Yamada-kun to 7-nin no Majo**",
                value:"By-Yoshikawa, Miki"
            },
            {
                name:"**:book: Kami nomi zo Shiru Sekai**",
                value:"By-Wakaki, Tamiki"
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}