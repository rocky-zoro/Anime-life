const watchlis = require('../models/watched');
module.exports = {
    name:'animelist',
    aliases:['al','anime-list'],
    desciption:"check your watchlist",
    async execute(client, message, args, Discord, profiledata){

        const watchlist = await watchlis.find({ userID : message.author.id}, (err, watchlist) =>{})
        
        const Embed1 =  new Discord.MessageEmbed()
            
            
        .setColor('#22addc')
        .setAuthor(`${message.author.username}'s Anime List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+ watchlist.map(element => element.anote.slice(0,36).join("\n")) +"\n", {split : true})
        .setFooter('Page-1/7 Support us');

        const Embed2 =  new Discord.MessageEmbed()
        
        
        .setColor('#38b6e0')
        .setAuthor(`${message.author.username}'s Anime List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+watchlist.map(element => element.anote.slice(36,73).join("\n"))+"\n", {split : true})
        .setFooter('Page-2/7 Support us');
        
        const Embed3 =  new Discord.MessageEmbed()
        
        
        .setColor('#4ebee4')
        .setAuthor(`${message.author.username}'s Anime List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+watchlist.map(element => element.anote.slice(73,109).join("\n"))+"\n", {split : true})
        .setFooter('Page-3/7 Support us');


        
        const Embed4 =  new Discord.MessageEmbed()
        
        
        .setColor('#64c6e7')
        .setAuthor(`${message.author.username}'s Anime List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+watchlist.map(element => element.anote.slice(109,145).join("\n"))+"\n", {split : true})
        .setFooter('Page-4/7 Support us');

        
        const Embed5 =  new Discord.MessageEmbed()
        
        
        .setColor('#7aceea')
        .setAuthor(`${message.author.username}'s Anime List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+watchlist.map(element => element.anote.slice(145,181).join("\n"))+"\n", {split : true})
        .setFooter('Page-5/7 Support us');

        
        const Embed6 =  new Discord.MessageEmbed()
        
        
        .setColor('#90d6ee')
        .setAuthor(`${message.author.username}'s Anime List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+watchlist.map(element => element.anote.slice(181,217).join("\n"))+"\n", {split : true})
        .setFooter('Page-6/7 Support us');
        
        const Embed7 =  new Discord.MessageEmbed()
        
        
        .setColor('#a6def1')
        .setAuthor(`${message.author.username}'s Anime List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+watchlist.map(element => element.anote.slice(217,253).join("\n"))+"\n", {split : true})
        .setFooter('Page-7/7 Support us');


        const pagesw = [Embed1, Embed2, Embed3, Embed4, Embed5, Embed6, Embed7]


        let page = 0;

            
        
        
        let msg = await message.channel.send(pagesw[0]);

        if(pagesw.length === 1) return;

        await msg.react("👈");
        
        await msg.react("👉");

        const nextembed = (reaction, user) => reaction.emoji.name === '👈' ;
        const previousembed = (reaction, user) => reaction.emoji.name === '👉' ;

        const previous = msg.createReactionCollector(nextembed, {time:900000, dispose: true});

        const next = msg.createReactionCollector(previousembed,{time:900000, dispose: true})


        next.on("collect", async () => {

            page = page + 1;
            msg.edit(pagesw[page]);
            console.log(page)
            if (page === 7){
                page=0
                msg.edit(pagesw[page])

            }

        })
        next.on("remove",async () =>{

            page = page + 1;
            msg.edit(pagesw[page]);
            console.log(page)
            if (page === 7){
                page=0
                msg.edit(pagesw[page])

            }

        })

        
    previous.on("collect",async () => {
        page = page - 1;
        msg.edit(pagesw[page]);
        console.log(page)
        if (page === -1){
            page=6
            msg.edit(pagesw[page])

        }


    })
    
    previous.on("remove",async () => {

        page = page - 1;
        msg.edit(pagesw[page]);
        console.log(page)
        if (page === -1){
            page=6
            msg.edit(pagesw[page])

        }
        

    })

        
    }

    

}