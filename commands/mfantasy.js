


module.exports = {

    name:'mfantasy',
    aliases:['msuper-power','mangasuper-power',['mangafantasy']],
    description:'A story or type of literature that describes situations that are very different from real life, usually involving powers.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Manga-Fantasy**')
        .setDescription('A type of literature that describes situations that are very different from real life, usually involving powers.')
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')
  

        .addFields(
            
            {
                name:"**:book: Solo Leveling **",
                value:"By-Chugong, Jang, Sung-rak"
            },
            {
                name:"**:book: Hunter x Hunter **",
                value:"By-Togashi, Yoshihiro"
            },
            {
                name:"**:book: Noragami **",
                value:"By-Adachitoka"
            },
            {
                name:"**:book: Claymore**",
                value:"By-Yagi, Norihiro"
            },
            {
                name:"**:book: Ao no Exorcist **",
                value:"By-Katou, Kazue"
            },
            {
                name:"**:book: Pandora Hearts**",
                value:"By-Xebec"
            },
            {
                name:"**:book: Berserk **",
                value:"By-Miura, Kentarou"
            },
            {
                name:"**:book: One Piece **",
                value:"By-Oda, Eiichiro"
            },
            {
                name:"**:book: Tower of God **",
                value:"By-SIU"
            },
            {
                name:"**:book: Akatsuki no Yona **",
                value:"By-Kusanagi, Mizuho"
            },
            


        )
        message.channel.send(newEmbed);

        


    }
}    