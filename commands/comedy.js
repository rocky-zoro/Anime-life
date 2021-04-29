


module.exports = {

    name:'comedy',
    aliases:['funny','funnyanime'],
    description:'Comedy is a genre of fiction consisting of discourses or works intended to be humorous or amusing by inducing laughter.',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle('**Comedy**')
        .setDescription('Comedy is a genre of fiction consisting of discourses or works intended to be humorous or amusing by inducing laughter.')
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
        
        .addFields(
            {
                name:'**:tv: Gintama**',
                value:'Episodes-353+'
                
            },
            {
                name:"**:tv: KonoSuba**",
                value:"Episodes-25+"
            },
            {
                name:"**:tv: The Disastrous Life of Saiki K.**",
                value:"Episodes-120"
            },
            {
                name:"**:tv: Grand Blue**",
                value:"Episodes-12+"
            },            
            {
                name:"**:tv: Great Teacher Onizuka**",
                value:"Episodes-43"
            },
            {
                name:"**:tv: One Punch Man**",
                value:"Episodes-24"
            },
            {
                name:"**:tv: Nichijou**",
                value:"Episodes-26+"
            },
            {
                name:"**:tv: Golden Boy**",
                value:"Episodes-6"
            },
            {
                name:"**:tv: Beelzebub**",
                value:"Episodes-60"
            },
            {
                name:"**:tv: Sakamoto desu ga?**",
                value:"Episodes-12"
            },

        )

        message.channel.send(newEmbed);

        


    }




}