const { Mongoose } = require('mongoose');
const { collection } = require('../models/watched');
const watchlist = require('../models/watched');
const mongoose = require('mongoose');
const { isValidObjectId } = require('mongoose');
module.exports = {
    name:'addmanga',
    aliases:['am'],
    desciption:"check your watchlist",

    async execute(client, message, args, Discord, profiledata){

        
    let note = args.join(" ");
    if (2 <= note.length && note.length <= 50){

    

    result = await watchlist.find({ userID : message.author.id}, (err, watchlist) =>{}) 

    
    max = result.map(element => element.watched.length);

    if(max[0] <= 252){


        await watchlist.findOneAndUpdate({
            userID: message.author.id
        },{
            $push:{
                watched : note
            }
        }
        )

        message.react('✅');

    }else {
        message.channel.send("Maximum no of manga you can add in your Manga list is **252**. `Support us so that we can increase the size of the total Manga use ?support and ?vote to support us`")
    
    }
    } else{

        
        message.react('❌');
        message.channel.send("You forgot to include the title of the Manga, mate.\nMinimum characters = `2` \nMaximum characters = `50`\nTo see how to add a manga into your manga list, look at the example.\nE.g.-`?am One Piece`, `?addmanga One Piece`")

    }   
    }   
}