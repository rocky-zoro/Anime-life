module.exports ={
    name: 'start',
    description:"Click to start your weeb life",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('**Start**')
        .setDescription('This where you will start your life of anime.')
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?ahelp','https://imgur.com/22ncPbk.png')
        
        .addFields(
            {name:'What is anime?', value:"Anime is the way you can escape the reality and create your own fantasy."},
            {name: 'Why you should watch anime?', value:'Unique stories suitable for all ages filled with violence, mortality, romance, death and much more. In anime a character can be anything a ghost, ghoul, god, pirate, ninja, demon, samurai, office worker......the list goes on. \nWith the endless possibilities and amazing action sequences people love to entertain themselves by watching it.'},
            {name:'Use **?join** command to join our community',value:'______'},

        )
        .setImage('https://imgur.com/AnA5xpb.png')
        message.channel.send(newEmbed);
    }
}