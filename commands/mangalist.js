const watchli = require('../models/watched');
module.exports = {
    name:'mangalist',
    aliases:['ml','manga-list'],
    desciption:"check your watched list",
    async execute(client, message, args, Discord, profiledata){

        
        const watchlist = await watchli.find({ userID : message.author.id}, (err, watchlist) =>{})

        const Embed1 =  new Discord.MessageEmbed()
            
            
        .setColor('#22dcad')
        .setAuthor(`${message.author.username}'s Manga List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+ watchlist.map(element => element.watched.slice(0,36).join("\n")) +"\n", {split : true})
        .setFooter('Page-1/7 Support us');

        const Embed2 =  new Discord.MessageEmbed()
        
        
        .setColor('#38e0b6')
        .setAuthor(`${message.author.username}'s Manga List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+watchlist.map(element => element.watched.slice(36,73).join("\n"))+"\n", {split : true})
        .setFooter('Page-2/7 Support us');
        
        const Embed3 =  new Discord.MessageEmbed()
        
        
        .setColor('#4ee4be')
        .setAuthor(`${message.author.username}'s Manga List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+watchlist.map(element => element.watched.slice(73,109).join("\n"))+"\n", {split : true})
        .setFooter('Page-3/7 Support us');


        
        const Embed4 =  new Discord.MessageEmbed()
        
        
        .setColor('#64e7c6')
        .setAuthor(`${message.author.username}'s Manga List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+watchlist.map(element => element.watched.slice(109,145).join("\n"))+"\n", {split : true})
        .setFooter('Page-4/7 Support us');

        
        const Embed5 =  new Discord.MessageEmbed()
        
        
        .setColor('#7aeace')
        .setAuthor(`${message.author.username}'s Manga List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+watchlist.map(element => element.watched.slice(145,181).join("\n"))+"\n", {split : true})
        .setFooter('Page-5/7 Support us');

        
        const Embed6 =  new Discord.MessageEmbed()
        
        
        .setColor('#90eed6')
        .setAuthor(`${message.author.username}'s Manga List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+watchlist.map(element => element.watched.slice(181,217).join("\n"))+"\n", {split : true})
        .setFooter('Page-6/7 Support us');
        
        const Embed7 =  new Discord.MessageEmbed()
        
        
        .setColor('#a6f1de')
        .setAuthor(`${message.author.username}'s Manga List`, message.author.displayAvatarURL())
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription("\n"+watchlist.map(element => element.watched.slice(217,253).join("\n"))+"\n", {split : true})
        .setFooter('Page-7/7 Support us');










            
        
        
        const pages = [Embed1, Embed2, Embed3, Embed4, Embed5, Embed6, Embed7]
        

        let page = 0;

            
        
        
        let msg = await message.channel.send(pages[0]);

        if(pages.length === 1) return;

        await msg.react("👈");
        
        await msg.react("👉");

        const nextembed = (reaction, user) => reaction.emoji.name === '👈' ;
        const previousembed = (reaction, user) => reaction.emoji.name === '👉' ;

        const previous = msg.createReactionCollector(nextembed, {time:900000, dispose: true});

        const next = msg.createReactionCollector(previousembed,{time:900000, dispose: true})


        next.on("collect", async () => {

            page = page + 1;
            msg.edit(pages[page]);
            console.log(page)
            if (page === 7){
                page=0
                msg.edit(pages[page])

            }

        })
        next.on("remove",async () =>{

            page = page + 1;
            msg.edit(pages[page]);
            console.log(page)
            if (page === 7){
                page=0
                msg.edit(pages[page])

            }

        })

        
    previous.on("collect",async () => {
        page = page - 1;
        msg.edit(pages[page]);
        console.log(page)
        if (page === -1){
            page=6
            msg.edit(pages[page])

        }


    })
    
    previous.on("remove",async () => {

        page = page - 1;
        msg.edit(pages[page]);
        console.log(page)
        if (page === -1){
            page=6
            msg.edit(pages[page])

        }
        

    })



        
        
        
        

        
    }

    

}