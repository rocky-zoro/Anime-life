module.exports ={
    name: 'manga',
    aliases:['man','m','mangalife','manga-life'],
    description:"So you have decided to choose manga",
    async execute(client, message, args, Discord){

        
        let embed = new Discord.MessageEmbed()
 
        

        .setTitle('**Genres**')
        .setDescription('These are the genres you can choose manga from.')
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('Page 1/3 | Use these commands to get the genre you desire.','https://imgur.com/22ncPbk.png')
        
        .addFields(
            
            {
                name:'**:tv: ?mshounen**', 
                value:"Aimed primarily at a young audience, typically characterized by action-filled plots with some minimal romantic aspects",
            },
            {
                name:'**:tv: ?msupernatural**',
                value:"Forces that cannot be explained by science mainly associated with magic, and even Shounen from time to time.",
                
            },
            {
                name:'**:tv: ?msliceoflife**', 
                value:"Slice of Life depicts day-to-day life, with a focus on life, how people go about it, and how they deal with problems.",
                   
            },
            {
                name:'**:tv: ?mromance**', 
                value:'Romance is emotional attraction towards another person and the courtship behaviors undertaken to express the feelings.'
            },
            {
                name:'**:tv: ?mmagic**',
                value:"Characters use magic by wands,grimoire,magic circles, alchemy... they use special powers to make things happen that would usually be impossible"
            },

        )
        .setFooter('Page 1/3 Support us','https://imgur.com/22ncPbk.png');



        let embed2 = new Discord.MessageEmbed()

        

        .setTitle('**Genres**')
        .setDescription('These are the genres you can choose manga from.')
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        .setFooter('Page 2/3 | Support us by ?support and ?vote','https://imgur.com/22ncPbk.png')   


        .addFields(
        {
            name:'**:tv: ?madventure**', 
            value:'The characters in the series are typically on some kind of journey, traveling in an unfamiliar territory and working towards some kind of goal.',
        },
        {
            name:'**:tv: ?mcomedy**', 
            value:"Comedy is a genre of fiction consisting of discourses or works intended to be humorous or amusing by inducing laughter.",
        },
        {   
            name:'**:tv: ?msports**',
            value:"It's a genre of Japanese manga and anime that focuses on stories involving sports and other athletic and competitive pursuits."
        },
        {
            name:'**:tv: ?mdrama**', 
            value:"A state, situation, or series of events involving interesting or intense conflict of forces",
        },
        {
            name:'**:tv: ?mfantasy**', 
            value:"A type of literature that describes situations that are very different from real life, usually involving powers.",
        },)

        
        let embed3 = new Discord.MessageEmbed()

        

        .setTitle('**Genres**')
        .setDescription('These are the genres you can choose manga from.')
        .setColor('#64e7c6')
        .setURL('https://discord.gg/adnga86cdA')
        
        .setFooter('Page 3/3 | Support us by ?support and ?vote','https://imgur.com/22ncPbk.png')        
        .addFields(            
        {
            name:'**:tv: ?mhorror**', 
            value :"An extremely strong feeling of fear and shock, or the frightening by the animations,sudden moments...",
        },
        {
            name:'**:tv: ?mphyschological**',
            value:"Psychological fiction is a narrative genre that emphasizes on interior characterization and motivation to explore the spiritual, emotional, and mental lives of the character.",
        },
        {
            name:'**:tv: ?mmystery**',
            value:"Anything difficult or unlikely to comprehend or describe, which normally entails exposing the character's abilities, killer, or offender.",
        },
        {
            name:'**:tv: ?msci-fi **',
            value: "It's a genre that features futuristic technology, or at the very least technology that we don't yet have. For example, spaceships, flying cars, and teleportation.",
        },
        {
            name:'**:tv: ?misekai**',
            value:"The main character is transported into another world via either reincarnation, summoning, or a god transmigrating them.",
        },)
        
        

        
        
        let pages = [embed, embed2, embed3]
        let page = 0;


        let msg = await message.channel.send(embed);

        if(pages.length === 1) return;

        await msg.react("🤛");
        
        await msg.react("🤜");

        const nextembed = (reaction) => reaction.emoji.name === '🤛' ;
        const previousembed = (reaction) => reaction.emoji.name === '🤜' ;

        const previous = msg.createReactionCollector(nextembed, {time:900000, dispose: true});

        const next = msg.createReactionCollector(previousembed,{time:900000, dispose: true})
        
        previous.on("collect", async () => {

            if(page > 0){

                page = page-1;

            } else{
                page = pages.length-1;
            }
            msg.edit(pages[page]);

        })
        previous.on("remove",async () =>{

            
            if(page > 0){

                page = page-1;

            } else{
                page = pages.length-1;
            }


            msg.edit(pages[page]);


        })

        next.on("collect",async () => {

            if (page+1<pages.length){
                page = page+1;

            } else{
                page=0;
            }

            msg.edit(pages[page]);


        })
        
        next.on("remove",async () => {

            if (page+1<pages.length){
                page = page+1;

            } else{
                page=0;
            }

            msg.edit(pages[page]);


        })





        

    }

    
}
