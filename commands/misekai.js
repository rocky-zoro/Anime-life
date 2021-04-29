
module.exports = {

    name:'misekai',
    aliases:['motherworld','mdifferentworld','mangaisekai','mangaotherworld','mangadifferentworld'],
    description:"It's a genre which involve the main character being transported into another world via either reincarnation, summoning, or a god transmigrating them.",
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Manga-Isekai**')
        .setDescription("The main character is transported into another world via either reincarnation, summoning, or a god transmigrating them.")
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')
     
        
        .addFields(
            {
                name:"**:book: Fushigi Yûgi Genbu Kaiden**",
                value:"By-Watase, Yuu"
            },
            {
                name:"**:book: That time I got Incarnated as a slime**",
                value:"By-Kawakami, Taiki, Fuse"
            },

            {
                name:"**:book: Re:Zer0 - Starting Life In Another World**",
                value:"BY-Nagatsuki, Tappei"
            },
            {
                name:"**:book: Kono Subarashii Sekai ni Shukufuku wo!(Konosuba)**",
                value:"By-Akatsuki, Natsume"
            },
            {
                name:"**:book: Sword Art Online: Progressive**",
                value:"By-Kawahara, Reki"
            },
            {
                name:"**:book: Mushoku Tensei: Isekai Ittara Honki Dasu**",
                value:"By-Fujikawa, Yuka "
            },
            {
                name:"**:book: Tate no Yuusha no Nariagari**",
                value:"By-Aneko, Yusagi"
            },
            {
                name:"**:book: Overlord**",
                value:"By-Maruyama, Kugane"
            },
            {
                name:"**:book: No Game No Life**",
                value:"By-Kamiya, Yuu"
            },
            {
                name:"**:book: Youjo Senki**",
                value:"By-Toujou, Chika"
            },
        )

        message.channel.send(newEmbed);

        
        
    }
}