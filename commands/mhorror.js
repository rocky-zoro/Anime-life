
module.exports = {

    name:'mhorror',
    aliases:['mdementia','mangahorror','mangadementia'],
    description:'An extremely strong feeling of fear and shock, or the frightening by the animations,sudden moments...',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Manga-Horror**')
        .setDescription('An extremely strong feeling of fear and shock, or the frightening by the animations,sudden moments...')
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')


        .addFields(
            {
                name:"**:book: Uzumaki**",
                value:"By-Ito, Junji"
            },
            {
                name:"**:book: Heads**",
                value:"By-Higashino, Keigo"
            },
            {
                name:"**:book: Berserk **",
                value:"By-Miura, Kentarou"
            },
            {
                name:"**:book: Yakusoku no Neverland **",
                value:"By-Demizu, Posuka"
            },
            {
                name:"**:book: Dorohedoro **",
                value:"By-Hayashida, Q"
            },
            {
                name:"**:book: Ajin**",
                value:"By-Sakurai, Gamon"
            },
            {
                name:"**:book: Kiseijuu**",
                value:"By-Iwaaki, Hitoshi"
            },
            {
                name:"**:book: Hellsing**",
                value:"By-Hirano, Kouta"
            },
            {
                name:"**:book: Bastard**",
                value:"By-Kim, Carnby, Hwang"
            },
            {
                name:"**:book: Another**",
                value:"By-Kiyohara, Hiro"
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}