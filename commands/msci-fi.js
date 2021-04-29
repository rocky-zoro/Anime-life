
module.exports = {

    name:'msci-fi',
    aliases:['mmecha','mshounenai','mangasci-fi','mangascifi','mangashounenai'],
    description:"It's a genre that incorporates future technology, or at least technology we don't have yet. E.g. Spaceships, flying cars, teleportation etc",
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Manga-Sci-fi**')
        .setDescription("It's a genre that features futuristic technology, or at the very least technology that we don't yet have. For example, spaceships, flying cars, and teleportation.")
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')

        .addFields(
            
            {
                name:"**:book: Neon Genesis Evangelion**",
                value:"By-Sadamoto, Yoshiyuki"
            },
            {
                name:"**:book: Pluto**",
                value:"By-Urasawa, Naoki"
            },
            {
                name:"**:book: Sidonia no Kishi**",
                value:"By-Nihei, Tsutomu"
            },
            {
                name:"**:book: Bokurano**",
                value:"By-Kitoh, Mohiro"
            },
            {
                name:"**:book: Darling in the FranXX**",
                value:"By-Yabuki, Kentarou"
            },
            {
                name:"**:book: Break Blade**",
                value:"By-Yoshinaga, Yunosuke"
            },
            {
                name:"**:book: Full Metal Panic!**",
                value:"By-Tateo, Retsu"
            },
            {
                name:"**:book: Tengen Toppa Gurren Lagann**",
                value:"By-Nakashima, Kazuki"
            },
            {
                name:"**:book: Dr. Stone**",
                value:"By-Inagaki, Riichiro, Boichi"
            },
            {
                name:"**:book: Btooom!**",
                value:"By-Inoue, Junya"
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}