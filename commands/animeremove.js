const { options } = require('node-superfetch');
const watchlist = require('../models/watched');
module.exports = {
    name:'removeanime',
    aliases:['ra'],
    desciption:"check your watchlist",

    async execute(client, message, args, Discord, profiledata){

        let olddoc;
        olddoc = profiledata.anote.length;


        
    let note = args.join(" ");
    if (!note) return message.channel.send("You forgot to include the title of the Anime, mate.\nTo see how to remove an anime from your anime list, look at the example.\nE.g.-`?ra One Piece`, `?removeanime One Piece`");

    const newdoc = await watchlist.findOneAndUpdate({
        userID: message.author.id,
    },{
        $pull:{
            anote : note
        },
    },
    {
        new: true

    }
    )

    if(olddoc === newdoc.anote.length){
        message.react('❌')
        message.channel.send("`Please double-check your anime's lowercase and uppercase characters. Make sure you include any special characters or emoji you used.`")

    }
    else{
        message.react('✅')
    }

    }


}