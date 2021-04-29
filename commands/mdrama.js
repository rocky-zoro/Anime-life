
module.exports = {

    name:'mdrama',
    
    aliases:['mcrime','mangadrama','mangacrime'],
    description:'A state, situation, or series of events involving interesting or intense conflict of forces',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Manga-Drama**')
        .setDescription('A state, situation, or series of events involving interesting or intense conflict of forces')
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')
        
        
        .addFields(
            
            {
                name:"**:book: Oyasumi Punpun**",
                value:"By-Asano, Inio"
            },
            {
                name:"**:book: Koe no Katachi**",
                value:"By-Ooima, Yoshitoki"
            },
            {
                name:"**:book: Vagabond**",
                value:"By-Inoue, Takehiko"
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
                name:"**:book: Vinland Saga **",
                value:"By-Vinland Saga"
            },
            {
                name:"**:book: Monster**",
                value:"By-Urasawa, Naoki"
            },
            {
                name:"**:book: Bakuman**",
                value:"By-Obata, Takeshi"
            },
            {
                name:"**:book: Ao Haru Ride **",
                value:"By-Sakisaka, Io"
            },
            {
                name:"**:book: The Breaker**",
                value:"By-Park, Jin-Hwan"
            },
        )

        message.channel.send(newEmbed);

        
        
    }
}