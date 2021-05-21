const { options } = require('node-superfetch');
const watchlist = require('../models/watched');
module.exports = {
    name:'removeanimeall',
    aliases:['removeallanime','raa'],
    desciption:"check your watchlist",

    async execute(client, message, profiledata){


    

        const yes = ['0 0 0 0','0000'];
        
        const filter = m => m.author.id === message.author.id;

        await message.channel.send("`Destroying Manga list.....`\n\nUse this code to destroy/delete your manga list-** 0 0 0 0**");
        const verify = await message.channel.awaitMessages(filter,{max:1, time:6500});
        
        if(!verify.size) return message.channel.send("_____\nProcess has been terminated.");

        let choice = verify.first().content;
        if(yes.includes(choice)){
 
    await watchlist.findOneAndUpdate({
        userID: message.author.id,
    },{
        $set:{
            anote :[]
        },
    }
    )
    
    message.react('✅')
    message.channel.send("You have successfully destroyed your Manga List.\n\n`To the new beginnings....`")
    } else{
        message.channel.send("_____\nProcess has been terminated.")
    }

    }


}