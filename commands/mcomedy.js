


module.exports = {

    name:'mcomedy',
    
    aliases:['mfunny','mangacomedy','mangafunny'],
    description:'Comedy is a genre of fiction consisting of discourses or works intended to be humorous or amusing by inducing laughter.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        
        .setTitle('**Manga-Comedy**')
        .setDescription('Comedy is a genre of fiction consisting of discourses or works intended to be humorous or amusing by inducing laughter.')
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')
    
        .addFields(
            
            {
                name:"**:book: Horimiya**",
                value:"By-Hagiwara, Daisuke"
            },
            {
                name:"**:book: Bakuman **",
                value:"By-Obata, Takeshi"
            },
            {
                name:"**:book: Gintama**",
                value:"By-Sorachi, Hideaki"
            },
            {
                name:"**:book: Komi-san wa, Comyushou desu.**",
                value:"By-Oda, Tomohito"
            },
            {
                name:"**:book: Kaichou wa Maid-sama!**",
                value:"By-Fujiwara, Hiro"
            },
            {
                name:"**:book: One Punch-Man**",
                value:"By-Murata, Yusuke, ONE"
            },
            {
                name:"**:book: GTO **",
                value:"By-Fujisawa, Tohru"
            },
            {
                name:"**:book: Spy x Family **",
                value:"By-Endou, Tatsuya"
            },
            {
                name:"**:book: Grand Blue**",
                value:"By-Inoue, Kenji"
            },
            {
                name:"**:book: Prison School**",
                value:"By-Hiramoto, Akira"
            },

        )

        message.channel.send(newEmbed);

        


    }




}