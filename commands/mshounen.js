


module.exports = {

    name:'mshounen',
    aliases:['mshonen','mzerotohero','mangashonen','mangazerotohero','mangashounen'],
    description:'A genre of Japanese comics and animated films aimed primarily at a young audience, typically characterized by action-filled plots with some minimal romantic aspects.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Manga-Shounen**')
        .setDescription('Aimed primarily at a young audience, typically characterized by action-filled plots with some minimal romantic aspects')
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')


        .addFields(
            
            {
                name:"**:book: One Piece**",
                value:"By-Oda, Eiichiro"
            },
            {
                name:"**:book: Shingeki no Kyojin**",
                value:"By-Isayama, Hajime"
            },
            {
                name:"**:book: Naruto**",
                value:"By-Kishimoto, Masashi"
            },
            {
                name:"**:book: Boku no Hero Academia**",
                value:"By-Horikoshi, Kouhei"
            },
            {
                name:"**:book: Death Note**",
                value:"By-Obata, Takeshi"
            },
            {
                name:"**:book: Bleach**",
                value:"By-Kubo, Tite"
            },
            {
                name:"**:book: Fairy Tail**",
                value:"By-Mashima, Hiro"
            },
            {
                name:"**:book: Fullmetal Alchemist**",
                value:"By-Arakawa, Hiromu"
            },
            {
                name:"**:book: Kimetsu no Yaiba**",
                value:"By-Gotouge, Koyoharu"
            },
            {
                name:"**:book: Hunter x Hunter**",
                value:"By-Togashi, Yoshihiro"
            },


        )
        message.channel.send(newEmbed);

        


    }




}