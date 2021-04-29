const discord = require('discord.js');

module.exports ={
    name: 'join',
    description:"Join us",
    async execute(client, message, args, Discord){

        
        let newEmbed = new Discord.MessageEmbed()

        

        .setTitle('**Join**')
        .setDescription('So you have choosed to joined our community.')
        .setColor('#64a6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
       
        
        
        .addFields(
            {name:'**?anime**', value:"This command will assist you in starting your anime-life"},
            {name: '**?manga**', value:"This command will assist you in starting your manga-life"},

        )
        .setImage('https://imgur.com/hiyIuoL.png')
        await message.channel.send(newEmbed);
        

        

    }

    
}

