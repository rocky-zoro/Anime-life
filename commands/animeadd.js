/* eslint-disable no-unused-vars */
const { Mongoose } = require('mongoose');
const { collection } = require('../models/watched');
const watchlist = require('../models/watched');
const mongoose = require('mongoose');
const { isValidObjectId } = require('mongoose');
module.exports = {
    name:'addanime',
    aliases:['aa'],
    desciption:"check your watchlist",

    async execute(client, message, args, Discord, profiledata){


        
    let note = args.join(" ")
    if (2 <= note.length && note.length <= 50){

        

    let result = await watchlist.find({ userID : message.author.id}, (err, watchlist) =>{    })
  

    let max = result.map(element => element.anote.length);

    if(max[0] <= 252){

        await watchlist.findOneAndUpdate({
            userID: message.author.id
        },{
            $push:{
                anote : note
            }
        }
        )
    
        message.react('✅');

    } else {
        message.channel.send("Maximum no of anime you can add in your Anime list is **252**.\n `Support us so that we can increase the size of the total Manga. Use ?support and ?vote to support us.`")
    
    }

    } 
    else {
        message.react('❌');
        message.channel.send('You forgot to include the title of the anime, mate.\nMinimum characters = `2` \nMaximum characters = `50`\nTo see how to add an anime into your Anime list, look at the example.\nE.g.-`?aa One Piece`, `?addanime One Piece`')
    }

    }

}