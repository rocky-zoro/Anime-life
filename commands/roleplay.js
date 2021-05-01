const fetch = require("node-fetch");
module.exports = {

    name:'roleplay',
    aliases:['rp'],
    description:'roleplay',
    async execute(client, message, args, Discord){

        
        let note = args.join(" ");
        if(!note) return message.channel.send("You forgot to include the title of the Manga, mate.\nTo see how to remove a manga from your manga list, look at the example.\nE.g.-`?rm Kawaii`, `?roleplay Pat`");
        let url = `https://g.tenor.com/v1/search?q=${note}&key=${process.env.tenorkey}&limit=8`;
        try {
            let response = await fetch(url);
            let json = await response.json();
            console.log(json);
            const index = Math.floor(Math.random() * json.results.length);
        
            const newEmbed = new Discord.MessageEmbed()
            
            .setTitle(`**${note}**`)
            .setDescription('roleplay')
            .setColor('RANDOM')
            .setURL('https://discord.gg/adnga86cdA')
            .setImage(`${json.results[index].url}`)
            .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
            message.channel.send(json.results[index].url)
            
            message.channel.send(newEmbed);

        
            } catch (err) {
            console.error('not work');
        }


        
    }
}
