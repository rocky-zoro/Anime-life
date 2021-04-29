
module.exports = {

    name:'mmagic',
    aliases:['mfairytale','mangamagic','mangafairytale'],
    description:"It's use of special powers to make things happen that would usually be impossible. Use characters use magic by wands,grimoire,magic circles, alchemy.....",
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Manga-Magic**')
        
        .setDescription("Characters use magic by wands,grimoire,magic circles, alchemy... they use special powers to make things happen that would usually be impossible")
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?msearch or ?mmoreinfo','https://imgur.com/22ncPbk.png')


        .addFields(
            {
                name:"**:book: Fairy Tail**",
                value:"By-Fairy Tail"
            },
            {
                name:"**:book: Black Clover **",
                value:"By-Tabata, Yuuki"
            },
            {
                name:"**:book: Magi **",
                value:"By-Ohtaka, Shinobu"
            },
            {
                name:"**:book: Mahoutsukai no Yome **",
                value:"By-Yamazaki, Kore"
            },
            {
                name:"**:book: Rosario to Vampire **",
                value:"By-Ikeda, Akihisa"
            },
            {
                name:"**:book: xxxHOLiC**",
                value:"By-CLAMP"
            },
            {
                name:"**:book: Mahou Sensei Negima!**",
                value:"By-Akamatsu, Ken"
            },
            {
                name:"**:book: Mushoku Tensei: Isekai Ittara Honki Dasu**",
                value:"By-Fujikawa, Yuka"
            },
            {
                name:"**:book: UQ Holder!**",
                value:"By-Akamatsu, Ken"
            },
            {
                name:"**:book: Bishoujo Senshi Sailor Moon**",
                value:"By-Takeuchi, Naoko"
            },
        )
        message.channel.send(newEmbed);

        
        
    }
}