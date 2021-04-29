
module.exports = {

    name:'mphyschological',
    aliases:['mtruecrime','mangaphyschological','mangatruecrime'],
    description:'Psychological fiction (also psychological realism) is a narrative genre that emphasizes interior characterization and motivation to explore the spiritual, emotional, and mental lives of the character.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Manga-Physchological**')
        .setDescription('Psychological fiction is a narrative genre that emphasizes on interior characterization and motivation to explore the spiritual, emotional, and mental lives of the character.')
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')

        .addFields(
            {
                name:"**:book: Oyasumi Punpun**",
                value:"By-Asano, Inio"
            },
            {
                name:"**:book: Gantz**",
                value:"By-Oku, Hiroya"
            },
            {
                name:"**:book: Death Note**",
                value:"By- Ohba, Tsugumi"
            },
            {
                name:"**:book: 20th Century Boys**",
                value:"By-Urasawa, Naoki"
            },
            {
                name:"**:book: Onanie Master Kurosawa**",
                value:"By-Yokota, Takuma"
            },
            {
                name:"**:book: Aku no Hana**",
                value:"By-Oshimi, Shuuzou"
            },
            {
                name:"**:book: Mirai Nikki**",
                value:"By-Esuno, Sakae"
            },
            {
                name:"**:book: Liar Game**",
                value:"By-Kaitani, Shinobu"
            },
            {
                name:"**:book: Utsuro no Hako to Zero no Maria**",
                value:"By-Mikage, Eiji, Tetsuo"
            },
            {
                name:"**:book: Neon Genesis Evangelion**",
                value:"By-Sadamoto, Yoshiyuki"
            },
        )

        message.channel.send(newEmbed);

        
        
    }
}
