const watchlist = require('../../models/watched');

module.exports = async (Discord, client, message) => {
    const prefix = '?';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    
    let profiledata;
    try{
        profiledata = await watchlist.findOne({
            userID: message.author.id,
        });
        if(!profiledata){

            
        let watchlistadd = await new watchlist({
        
            userID : message.author.id,
            serverID: message.guild.id,
        })

        watchlistadd.save()
        .catch(err => console.log(err))
        console.log("Your profile is saved");

        }

    } catch(err){
        console.log(err);
    }



    

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd= args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    try{

    if(command) command.execute(client, message, args, Discord, profiledata);
    } catch(err){
        message.reply("Error in the command one");
        console.log(err);
    }

}