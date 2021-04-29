const watchlist = require('../models/watched');
module.exports = {
    name:'powerupprofile',
    desciption:"check your watchlist",

    async execute(client, message, args, Discord){

        
    let note = args.join("-----");

    let profiledata;
        profiledata = await watchlist.findOne({
            userID: message.author.id,
        })
        if(!profiledata){

            
        let watchlistadd = new watchlist({
        
            userID : message.author.id,
            serverID: message.guild.id,
            watched: note,
        })

        watchlistadd.save()
        .catch(err => console.log(err))
        message.reply("Your profile is saved");

    } else{
        message.channel.send("You already have a profile")}

    }



}