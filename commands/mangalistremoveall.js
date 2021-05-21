const { options } = require('node-superfetch');
const watchlist = require('../models/watched');
module.exports = {
    name:'removemangaall',
    aliases:['ram','removeallmanga'],
    desciption:"check your watchlist",

    async execute(client, message, args, Discord, profiledata){


        const yes = ['1 1 1 1','1111'];
        
        const filter = m => m.author.id === message.author.id;

        await message.channel.send("`Destroying Manga list.....`\n\nUse this code to destroy/delete your manga list-** 1 1 1 1**");
        const verify = await message.channel.awaitMessages(filter,{max:1, time:30000});
        
        if(!verify.size) return message.channel.send("_____\nProcess has been terminated.");

        let choice = verify.first().content;
        if(yes.includes(choice)){
                
        await watchlist.findOneAndUpdate({
            userID: message.author.id,
        },{
            $set:{
                watched :[]
            },
        },
        )
        
        message.react('✅')
        message.channel.send("You have successfully destroyed your Manga List.\n\n`To the new beginnings....`")
        } else{
            message.channel.send("_____\nProcess has been terminated.");
        }
        
    }


}