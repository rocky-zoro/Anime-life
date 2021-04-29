


module.exports = {

    name:'shounen',
    aliases:['shonen','zerotohero'],
    description:'A genre of Japanese comics and animated films aimed primarily at a young audience, typically characterized by action-filled plots with some minimal romantic aspects.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Shounen**')
        .setDescription('Aimed primarily at a young audience, typically characterized by action-filled plots with some minimal romantic aspects')
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        .addFields(
            {
                name:'**:tv: One-Piece**',
                value:'Episodes-971+'
                
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
                value:'Episodes-720'
                
            },
            
            {
                name:'**:tv: Gintama**',
                value:'Episodes-353'
                
            },
            
            {
                name:'**:tv: Dragon Ball/Z/Super**',
                value:'Episodes-575+'
                
            },
            
            {
                name:'**:tv: Bleach**',
                value:'Episodes-366+'
                
            },
            {
                name:'**:tv: Attack on Titan**',
                value:'Episodes-75+'
                
            },
            {
                name:"**:tv: Jojo's Bizarre Adveture**",
                value:'Episodes-152+'
                
            },
            {
                name:'**:tv: Death Note**',
                value:'Episodes-37'
                
            },
            


        )
        message.channel.send(newEmbed);

        


    }




}