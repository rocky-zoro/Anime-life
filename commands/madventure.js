
module.exports = {

    name:'madventure',
    aliases:['maction','mangaadventure','mangaaction'],
    description:'In this the main and the  other characters embark on a journey facing obstacles, some of them on a mission, some have their own purposes.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('**Manga-Adventure**')
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')
        .setDescription('The characters in the series are typically on some kind of journey, traveling in an unfamiliar territory and working towards some kind of goal.')
        

        .addFields(
            
            {
                name:"**:book: Shingeki no kyojin**",
                value:"By-Isayama, hajime"
            },
            {
                name:"**: book:Berserk**",
                value:"By-Miura, Kentarou"
            },
            {
                name:"**:book: One Piece**",
                value:"By-Oda, Eiichiro"
            },
            {
                name:"**:book: Tokyo Ghoul**",
                value:"By-Ishida, Sui"
            },
            {
                name:"**:book: Naruto**",
                value:"By-kishimoto, Masashi"
            },
            {
                name:"**:book: One Punch-Man**",
                value:"By-Murata, Yusuke, ONE"
            },
            {
                name:"**:book: Boku no Hero Academia**",
                value:"By-Horikoshi, Kouhei"
            },
            {
                name:"**:book: Bleach**",
                value:"By-Kuho,Tite"
            },
            {
                name:"**:book: Fullmetal Alchemist**",
                value:"By-Arakawa, Hiromu"
            },
            {
                name:"**:book: Solo Leveling**",
                value:"By-Chugong, Jang, Sung-rak"
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}