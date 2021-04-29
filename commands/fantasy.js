


module.exports = {

    name:'fantasy',
    aliases:['super-power'],
    description:'A story or type of literature that describes situations that are very different from real life, usually involving powers.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Fantasy**')
        .setDescription('A type of literature that describes situations that are very different from real life, usually involving powers.')
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        
        .addFields(
            {
                name:'**:tv: One-Piece**',
                value:'Episodes-1000+'
                
            },
            
            {
                name:'**:tv: Hunter X Hunter**',
                value:'Episodes-148'
                
            },
            
            {
                name:'**:tv: Fullmetal Alchemist: Brotherhood**',
                value:'Episodes-64'
                
            },
            
            {
                name:'**:tv: Naruto & Naruto Shippuden**',
                value:'Episodes-720+'
                
            },
            
            {
                name:'**:tv: Gintama**',
                value:'Episodes-300+'
                
            },
            
            {
                name:'**:tv: Dragon Ball/Z/Super**',
                value:'Episodes-500+'
                
            },
            
            {
                name:'**:tv: Bleach**',
                value:'Episodes-366+'
                
            },
            {
                name:'**:tv: Attack on Titan**',
                value:'Episodes-80+'
                
            },
            {
                name:"**:tv: Jojo's Bizarre Adveture**",
                value:'Episodes-160+'
                
            },
            {
                name:'**:tv: Death Note**',
                value:'Episodes-37'
                
            },
            


        )
        message.channel.send(newEmbed);

        


    }
}    