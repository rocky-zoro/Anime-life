
module.exports = {

    name:'msliceoflife',
    aliases:['mrealism','mangasliceoflife','mangarealism'],
    description:"Slice of Life portrays day-to-day life, primarily about life, how one goes about it, and how one deals with their problems.",
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Manga-Slice of Life**')
        .setDescription("Slice of Life depicts day-to-day life, with a focus on life, how people go about it, and how they deal with problems.")
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')
        

        .addFields(
            
            {
                name:"**:book: Oyasumi Punpun**",
                value:"By-Asano, Inio"
            },
            {
                name:"**:book: Horimiya**",
                value:"By-Hagiwara, Daisuke"
            },
            {
                name:"**:book: Ao Haru Ride**",
                value:"By-Sakisaka, Io"
            },
            {
                name:"**:book: ReLIFE**",
                value:"By-Yayoi, Sou"
            },
            {
                name:"**:book: Yotsuba to!**",
                value:"By-Azuma, Kiyohiko"
            },
            {
                name:"**:book: Ijiranaide, Nagatoro-san**",
                value:"By-774"
            },
            {
                name:"**:book: Grand Blue**",
                value:"By-Inoue, Kenji"
            },
            {
                name:"**:book: Kimi ni Todoke**",
                value:"By-Shiina, Karuho"
            },
            {
                name:"**:book: Nana**",
                value:"By-Yazawa, Ai"
            },
            {
                name:"**:book: Gokushufudou**",
                value:"By-Oono, Kousuke"
            },
        )

        message.channel.send(newEmbed);

        
        
    }
}