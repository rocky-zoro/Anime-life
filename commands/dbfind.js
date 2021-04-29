const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
module.exports = {
    name:'databasefind',
    aliases:["dbf"],
    desciption:"check your watchlist",

    
    async execute(client, message, args, Discord, profiledata){

        
    let idno = args.join(" ");
    if (idno.length<3) return message.channel.send("Add atleast three characters");
        
    let on = await mongoose.connection.db.collection("animeinfo");
    
    let info = await on.aggregate(
        [
        {"$match":{
            "title":{$regex : idno, "$options" : "im"}
        }},
        {"$project":{ // show only specified fields
            uid:1,
            title:1,
            _id:0
        }},{
            "$sort" :{"title" : -1}
        },
        
    ]).toArray()

    top160 =info.slice(0,160)

    

    message.channel.send(top160.map( function(el){return (`**${el.title}**`+"-"+`${el.uid}`)}),{split: true})
    .catch(err => message.channel.send("Couldn't find results in database you can try ?search and ?moreinfo"))
    
    }

    

}