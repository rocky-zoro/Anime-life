const fetch = require("node-fetch");
module.exports = {

    name:'roleplay',
    aliases:['rp'],
    description:'roleplay',
    async execute(client, message, args, Discord){

        
        let note = args.join(" ");
        if(!note) return message.channel.send("You forgot to include the title of the Manga, mate.\nTo see how to remove a manga from your manga list, look at the example.\nE.g.-`?rm Kawaii`, `?roleplay Pat`");
        let st;
        switch(note){
            case 'cute':
                st = "anime hug";
                limit = 10;
                break;

            case'tch':
                st = 'tch';
                limit = 4;
                break;
        
            case'laugh':
                st = 'anime laughing';
                limit = 15;
                break;
            case'shy':
                st = '20';
                limit = 2;
                break;
            case'yes':
                st = 'anime yes';
                limit = 8;
                break;
            case'pat':
                st = 'anime pat';
                limit = 10;
                break;
            case'kick':
                st = 'anime kick';
                limit = 10;
                break;
            case'punch':
                st = 'anime puncg';
                limit = 10;
                break;
            case'slap':
                st = 'anime slap';
                limit = 10;
                break;
            case'good night':
                st = 'anime good night';
                limit = 10;
                break;
            case'hehe':
                st = 'anime hehe';
                limit = 10;
                break;
            case'okay':
                st = 'anime okay';
                limit = 2;
                break;
                
            default:
                    
                st = "anime no";
                limit = 50;

        }
        let url = `https://g.tenor.com/v1/search?q=${st}&key=${process.env.tenorkey}&limit=${limit}`;
        try {
            let response = await fetch(url);
            let json = await response.json();
            console.log(json.results);
            const index = Math.floor(Math.random() * json.results.length);
        
            const newEmbed = await new Discord.MessageEmbed()
            
            .setTitle(`**${note}**`)
            .setDescription('roleplay')
            .setColor('RANDOM')
            .setURL('https://discord.gg/adnga86cdA')
            .setImage(`${json.results[index].media[0].gif.url}`)
            .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
            
            message.channel.send(newEmbed);

        
            } catch (err) {
            console.error('not work');
        }


        
    }
}
