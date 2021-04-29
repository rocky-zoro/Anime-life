const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
module.exports = {
    name:'databaseanimeid',
    aliases:["dbid"],
    desciption:"check your watchlist",

    
    async execute(client, message, args, Discord, profiledata){
        
        
        
    let idno = args.join(" ");
    if (!idno) return message.channel.send("No anime no entered");




    let waits = await mongoose.connection.db.collection("animeinfo");
    try{
    let wait = await waits.findOne({uid:idno});




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
    catch(err){
        message.channel.send('Enter a valid ID Number.')
    }


    }

    

}