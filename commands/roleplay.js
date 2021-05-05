const fetch = require("node-fetch");
module.exports = {

    name:'roleplay',
    aliases:['rp'],
    description:'roleplay',
    async execute(client, message, args, Discord){

        try {

        
        let note = args.join(" ").trim().split(" ",50);
        if(!note[0]) return message.channel.send("That was incorrect mate. Do it in this manner.\nE.g.-`?rp Kawaii `, `?roleplay Pat`");
        
        let beauseof = ". "+ note.slice(2,50).join(" ");
        let taggeduser;
        let taggedsomeoneornot = "yes";
        let st;
        let doing = [" "];
        let asinglehuman = [" "];



        
        
        if(!note[1] || note[1]==="no-one"){
            taggedsomeoneornot = "no";
            const userfullname =["Elon Musk", "Lionel Messi","Sylvester Stallone", "PewDiePie" ,"Mahatma Gandhi" ,"Barack Obama", "Drake", "Shaquille O'Neal", "John Cena", "Leonardo DiCapiro", "Usain Bolt", "Pelé", "Morgan Freeman", "Katy Perry", "Tom Hanks", "Taylor Swift", "Freddie Mercury", "Albert Einstein", "Jay-Z", "Eminem", "Donald Trump", "Jackie Chan", "Princess Diana", "Tom Cruise", "Muhammad Ali", "Madonna", "Rihanna", "Jesus Christ", "Arnold Schwarzenegger", "Michael Jordan", "Bruce Lee", "Will Smith", "Kanye West", "Elvis Presley", "Beyonce", "Oprah" ,"Michael Jackson", "Batman", "Superman", "Naruto", "Luffy", "Levi", "Itachi Uchiha", "Zoro", "Cristiano Ronaldo","Stephen Hawking", "The Undertaker", "Robert Downey Jr", "Justin Bieber"]
            const indexfullname = Math.floor(Math.random() * userfullname.length);
        
            taggeduser = userfullname[indexfullname];
        }else if(note[1].startsWith('<@') && note[1].endsWith('>')) {
            try{
                    mention = note[1].slice(2,-1)
                if(mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
                const infotaggeduser= await client.users.fetch(mention)
                taggeduser = infotaggeduser.username;
            } catch{    
                const userfullname =["Elon Musk", "Lionel Messi","Sylvester Stallone", "PewDiePie" ,"Mahatma Gandhi" ,"Barack Obama", "Drake", "Shaquille O'Neal", "John Cena", "Leonardo DiCapiro", "Usain Bolt", "Pelé", "Morgan Freeman", "Katy Perry", "Tom Hanks", "Taylor Swift", "Freddie Mercury", "Albert Einstein", "Jay-Z", "Eminem", "Donald Trump", "Jackie Chan", "Princess Diana", "Tom Cruise", "Muhammad Ali", "Madonna", "Rihanna", "Jesus Christ", "Arnold Schwarzenegger", "Michael Jordan", "Bruce Lee", "Will Smith", "Kanye West", "Elvis Presley", "Beyonce", "Oprah" ,"Michael Jackson", "Batman", "Superman", "Naruto", "Luffy", "Levi", "Itachi Uchiha", "Zoro", "Cristiano Ronaldo","Stephen Hawking", "The Undertaker", "Robert Downey Jr", "Justin Bieber"]
            const indexfullname = Math.floor(Math.random() * userfullname.length);
        
            taggeduser = userfullname[indexfullname];
        
            }
        } else if (note[1].match(/^[0-9]+$/)) {
            try{
            const infotaggeduser = await client.users.fetch(note[1]);
            taggeduser = infotaggeduser.username;} catch{
                const userfullname =["Elon Musk", "Lionel Messi","Sylvester Stallone", "PewDiePie" ,"Barack Obama", "Drake", "Mahatma Gandhi", "Shaquille O'Neal", "John Cena", "Leonardo DiCapiro", "Usain Bolt", "Pelé", "Morgan Freeman", "Katy Perry", "Tom Hanks", "Taylor Swift", "Freddie Mercury", "Albert Einstein", "Jay-Z", "Eminem", "Donald Trump", "Jackie Chan", "Princess Diana", "Tom Cruise", "Muhammad Ali", "Madonna", "Rihanna", "Jesus Christ", "Arnold Schwarzenegger", "Michael Jordan", "Bruce Lee", "Will Smith", "Kanye West", "Elvis Presley", "Beyonce", "Oprah" ,"Michael Jackson", "Batman", "Superman", "Naruto", "Luffy", "Levi", "Itachi Uchiha", "Zoro", "Cristiano Ronaldo","Stephen Hawking", "The Undertaker", "Robert Downey Jr", "Justin Bieber"]
                const indexfullname = Math.floor(Math.random() * userfullname.length);
            
                taggeduser = userfullname[indexfullname];
            
            }

        } else if(note[1].startsWith('-')){
            someoneidk = note[1].slice(1,50);
            taggeduser = someoneidk;
        } else if(note[1] === "?anime"){
            taggeduser = "will add only anime characters"
        }else {
            const userfullname =["Elon Musk", "Lionel Messi","Sylvester Stallone", "PewDiePie" ,"Barack Obama", "Drake", "Mahatma Gandhi", "Shaquille O'Neal", "John Cena", "Leonardo DiCapiro", "Usain Bolt", "Pelé", "Morgan Freeman", "Katy Perry", "Tom Hanks", "Taylor Swift", "Freddie Mercury", "Albert Einstein", "Jay-Z", "Eminem", "Donald Trump", "Jackie Chan", "Princess Diana", "Tom Cruise", "Muhammad Ali", "Madonna", "Rihanna", "Jesus Christ", "Arnold Schwarzenegger", "Michael Jordan", "Bruce Lee", "Will Smith", "Kanye West", "Elvis Presley", "Beyonce", "Oprah" ,"Michael Jackson", "Batman", "Superman", "Naruto", "Luffy", "Levi", "Itachi Uchiha", "Zoro", "Cristiano Ronaldo","Stephen Hawking", "The Undertaker", "Robert Downey Jr", "Justin Bieber"]
                const indexfullname = Math.floor(Math.random() * userfullname.length);
            
                taggeduser = userfullname[indexfullname];
        }
        
        
        
        
        
        
        switch(note[0]){
            case 'cute':
                st = "anime hug";
                limit = 10;
                break;

            case 'tch':
                st = 'tch';
                doing = ["is annoyed by","is displeased by"];
                asinglehuman = ["is getting mad"];
                limit = 4;
                break;
        
            case 'laugh':
                st = 'anime laughing';
                limit = 15;
                doing = ["is teasing"];
                asinglehuman = ["is laughing"];
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
                searchterm = ["anime nope","anime no"]; //whichever user is tagged said no okay or someone else tagged Idk said no // message.author.name wants to say that
                doingwhat=[`is annoyed by this${taggeduser}`,"happy"]
                limitforsearchterm = [50, 25]
                stno = Math.floor(Math.random()*searchterm.length);
                doing = [doingwhat[stno]];
                st = searchterm[stno];
                limit = limitforsearchterm[stno];
        
        }        
        
        
        
        
        
        
        
        
        
        if(taggedsomeoneornot === "no"){

            singlehumanindexno = Math.floor(Math.random()*asinglehuman.length); 
            let url = `https://g.tenor.com/v1/search?q=${st}&key=${process.env.tenorkey}&limit=${limit}`;
                let response = await fetch(url);
                let json = await response.json();
                console.log(json.results);
                const index = Math.floor(Math.random() * json.results.length);
            
                const newEmbed = await new Discord.MessageEmbed()
                
                .setTitle(`**${message.author.username} ${asinglehuman[singlehumanindexno]}${beauseof}**`)
                .setDescription('Roleplay')
                .setColor('RANDOM')
                .setURL('https://discord.gg/adnga86cdA')
                .setImage(`${json.results[index].media[0].gif.url}`)
                .setFooter('Support us by using $support and $vote','https://imgur.com/22ncPbk.png')
                
                message.channel.send(newEmbed);


        } else{
            
            taggedhumanindexno = Math.floor(Math.random()*doing.length);//here is the error
            let url = `https://g.tenor.com/v1/search?q=${st}&key=${process.env.tenorkey}&limit=${limit}`;
                let response = await fetch(url);
                let json = await response.json();
                console.log(json.results);
                const index = Math.floor(Math.random() * json.results.length);
            
                const newEmbed = await new Discord.MessageEmbed()
                
                .setTitle(`**${message.author.username} ${doing[taggedhumanindexno]} ${taggeduser}${beauseof}**`)
                .setDescription('roleplay')
                .setColor('RANDOM')
                .setURL('https://discord.gg/adnga86cdA')
                .setImage(`${json.results[index].media[0].gif.url}`)
                .setFooter('Support us by using $support and $vote','https://imgur.com/22ncPbk.png')
                
                message.channel.send(newEmbed);

        
        }

            } catch (err) {
            console.error('not work');
        }


        
    }
}
