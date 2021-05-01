
module.exports = {

    name:'roleplay',
    aliases:['rp'],
    description:'roleplay',
    execute(client, message, args, Discord){

        
        let note = args.join(" ");
        if(!note) return message.channel.send("You forgot to include the title of the Manga, mate.\nTo see how to remove a manga from your manga list, look at the example.\nE.g.-`?rm Kawaii`, `?roleplay Pat`");

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle(`**${note}**`)
        .setDescription('roleplay')
        .setColor('RANDOM')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')

        message.channel.send(newEmbed);

        
        
    }
}
