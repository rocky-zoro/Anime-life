
module.exports = {

    name:'mromance',
    aliases:['mangaromance'],
    description:'Romance (love), emotional attraction towards another person and the courtship behaviors undertaken to express the feelings.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Manga-Romance**')
        .setDescription('Romance is emotional attraction towards another person and the courtship behaviors undertaken to express the feelings.')
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')

        .addFields(
            
            {
                name:"**:book: Horimiya**",
                value:"By-Hagiwara, Daisuke"
            },
            {
                name:"**:book: Nisekoi**",
                value:"By-Komi, Naoshi"
            },
            {
                name:"**:book: Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen**",
                value:"By-Akasaka, Aka"
            },
            {
                name:"**:book: Bakuman**",
                value:"By-Obata, Takeshi"
            },
            {
                name:"**:book: Noragami**",
                value:"By-Adachitoka"
            },
            {
                name:"**:book: ReLIFE**",
                value:"By-Yayoi, Sou"
            },
            {
                name:"**:book: Fruits Basket**",
                value:"By-Takaya, Natsuki"
            },
            {
                name:"**:book: Ouran Koukou Host Club**",
                value:"By-Hatori, Bisco"
            },
            {
                name:"**:book: Ijiranaide, Nagatoro-san**",
                value:"By-774"
            },
            {
                name:"**:book: Kimi ni Todoke**",
                value:"By-Shiina, Karuho"
            },
            
        )

        message.channel.send(newEmbed);

        
        
    }
}