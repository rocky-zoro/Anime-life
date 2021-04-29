const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
module.exports = {
    name:'rand',
    aliases:["ra","r"],
    premissions:[],
    desciption:"check your watchlist",

    
    async execute(client, message, args, Discord, profiledata){

    
        let on = await mongoose.connection.db.collection("animeinfo",{})
    
        let info = await on.aggregate([ { $sample: { size: 1 } } ]).toArray();
        let wait = info[0];

            
        let newEmbed = new Discord.MessageEmbed()
                
                
        .setColor('RANDOM')
        .setTitle(`${wait.title} (Eps-${wait.episodes})`,)
        .setURL(wait.link)
        .setAuthor(`${wait.uid}`)
        .setThumbnail(wait.img_url)
        .setDescription(`${wait.synopsis.slice(0, 250)}.....`)
        .addFields(
            {
                name:"Genres",
                value: wait.genre

            },
            {
                name:"Popularity",
                value: wait.popularity,
                inline: true
            },
            {
                name:"Ranked",
                value: wait.ranked,
                inline: true
            },
            {
                name:"Score",
                value: wait.score,
                inline: true

            }
        )
        .setFooter(`Dearest to- ${wait.members} Humans`);
        message.channel.send(newEmbed);


        



    }

    

}