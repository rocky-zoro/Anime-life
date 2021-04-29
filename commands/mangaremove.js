const { options } = require('node-superfetch');
const watchlist = require('../models/watched');
module.exports = {
    name:'removemanga',
    aliases:['rm'],
    desciption:"check your watchlist",

    async execute(client, message, args, Discord, profiledata){

        let olddoc;
        olddoc = profiledata.watched.length;


        
    let note = args.join(" ");
    if (!note) return message.channel.send("You forgot to include the title of the Manga, mate.\nTo see how to remove a manga from your manga list, look at the example.\nE.g.-`?rm One Piece`, `?removemanga One Piece`");

    const newdoc = await watchlist.findOneAndUpdate({
        userID: message.author.id,
    },{
        $pull:{
            watched : note
        },
    },
    {
        new: true

    }
    )

    if(olddoc === newdoc.watched.length){
        message.react('❌')
        message.channel.send("`Please double-check your manga's lowercase and uppercase characters. Make sure you include any special characters or emoji you used.`")
    }
    else{
        message.react('✅')
    }

    }


}