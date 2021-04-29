
module.exports = {

    name:'mystery',
    aliases:['suspense','thriller'],
    description:'Something that is difficult or impossible to understand or explain that usually involves revealing the character powers, murderer, perpetrator...',
    execute(client, message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('**Mystery**')
        .setDescription("Anything difficult or unlikely to comprehend or describe, which normally entails exposing the character's abilities, killer, or offender.")
        .setColor('#64c6e7')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('For more info use ?search,?dbf or ?moreinfo','https://imgur.com/22ncPbk.png')
       
        .addFields(
            {
                name:"**:tv: Durarara!!**",
                value:"Episodes-24+"
            },
            {
                name:"**:tv: Bakemonogatari**",
                value:"Episodes-15+"
            },
            {
                name:"**:tv: Hyouka**",
                value:"Episodes-22+"
            },
            {
                name:"**:tv: Kuroshitsuji**",
                value:"Episodes-24+"
            },
            {
                name:"**:tv: Bungou Stray Dogs**",
                value:"Episodes-12+"
            },
            {
                name:"**:tv: Monster**",
                value:"Episodes-74+"
            },
            {
                name:"**:tv: Shinsekai yori**",
                value:"Episodes-25+"
            },
            {
                name:"**:tv: Serial Experiments Lain**",
                value:"Episodes-13+"
            },
            {
                name:"**:tv: Shiki**",
                value:"Episodes-22+"
            },
            {
                name:"**:tv: Ajin**",
                value:"Episodes-13+"
            },
        )

        message.channel.send(newEmbed);

        
        
    }
}