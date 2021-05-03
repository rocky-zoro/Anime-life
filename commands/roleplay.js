const fetch = require("node-fetch");
module.exports = {

    name:'roleplay',
    aliases:['rp'],
    description:'roleplay',
    async execute(client, message, args, Discord){

        try {
        
        let note = args.join(" ").trim().split(" ",2);
        if(!note) return message.channel.send("You forgot to include the title of the Manga, mate.\nTo see how to remove a manga from your manga list, look at the example.\nE.g.-`?rp Kawaii`, `?roleplay Pat`");
        if(!note[1]){
            taggeruser = message.author.username;
        }
        if(note[1].startsWith('<@') && note[1].endsWith('>')) {
            mention = note[1].slice(2,-1)
            if(mention.startsWith('!')) {
                mention = mention.slice(1);
            }
            taggeruse = await client.users.fetch(mention)
            taggeruser = taggeruse.username;
        } else if (note[1].match(/(\d+)/)) {
            taggeruse = await client.users.fetch(wo[1]);
            taggeruser = taggeruse.username;
        } else {
            taggeruser = note[1];
        }
        let st;
        let doing;
        switch(note[0]){
            case 'cute':
                st = "anime hug";
                limit = 10;
                break;

            case 'tch':
                st = 'tch';
                doing = ["is annoyed by","is displeased by"];
                limit = 4;
                break;
        
            case 'laugh':
                st = 'anime laughing';
                limit = 15;
                doing = "is teasing";
                break;
            case 'shy':
                st = 'anime shy';
                limit = 20;
                break;
            case 'yes':
                st = 'anime yes';
                limit = 8;
                break;
            case 'pat':
                st = 'anime pat';
                limit = 10;
                break;
            case 'kick':
                st = 'anime kick';
                limit = 10;
                break;
            case 'punch':
                st = 'anime punch';
                limit = 10;
                break;
            case 'slap':
                st = 'anime slap';
                limit = 10;
                break;
            case 'night':
                st = 'anime good night'; //cry, uwu, died, sorry,sleep,defeat, no bully, finger, boo, smirk, think, clap, swag
                limit = 10;
                break;
            case 'hehe':
                st = 'anime hehe';
                limit = 10;
                break;
            case 'okay':
                st = 'anime okay';
                limit = 2;
                break;
            case 'cry':
                st = 'anime cry';
                limit = 30;
                break;
            case 'uwu':
                st = 'anime love'
                limit = 15;
                break;
            
            default:
                     
                st = "anime nope";
                limit = 50;

        }
        no = Math.floor(Math.random()*doing.length); 
        let url = `https://g.tenor.com/v1/search?q=${st}&key=${process.env.tenorkey}&limit=${limit}`;
            let response = await fetch(url);
            let json = await response.json();
            console.log(json.results);
            const index = Math.floor(Math.random() * json.results.length);
        
            const newEmbed = await new Discord.MessageEmbed()
            
            .setTitle(`**${message.author.user}${doing[no]}${taggeruser}**`)
            .setDescription('roleplay')
            .setColor('RANDOM')
            .setURL('https://discord.gg/adnga86cdA')
            .setImage(`${json.results[index].media[0].gif.url}`)
            .setFooter('Support us','https://imgur.com/22ncPbk.png')
            
            message.channel.send(newEmbed);

        
            } catch (err) {
            console.error('not work');
        }


        
    }
}
