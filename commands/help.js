
module.exports = {

    name:'ahelp',
    aliases:['ainfo','ahelp','amoreinfo','information','ah','ahe','ahel'],
    description:'help,info = command',
    async execute(client, message, args, Discord){


        const embed = new Discord.MessageEmbed()
        .setColor('#8de038')
        .setTitle('**Anime-list/Manga-list**')
        .setDescription("Create your own awesome **Anime-list & Manga-list**\nSo that you can keep track of.\n\n**What you are watching and reading?**\n**What you will watch and read?**\n**What you have already watched and read?** \n\nUse these commands to make your **Anime List**.")
        .addFields(
            {
                name:"?animelist-`?al`",
                value:"To view your anime list"

            },
            {
                name:"?addanime-`?aa`",
                value:"To add an anime in your anime-list\n`E.g.-?am One Piece`"
            },
            {
                name:"?removeanime-`?ra`",
                value:"To remove an anime from your anime-list\n`E.g.-?ra One Piece`"
            },
            {
                name:"?removeallanime-`?raa`, `?removeanimeall`",
                value:"To remove all anime from your anime-list"
            }
            )
        .setFooter("Page 1/6 | Click on the react emoji for next page.");
        
        const embed2 = new Discord.MessageEmbed()
        .setColor('#99e44e')
        .setDescription("Use these commands to make your ** Manga List**.")
        .addFields(
            {
                name :"?mangalist-`?ml`",
                value:"To view your Manga List"
            },
            {
                name:"?addmanga-`?am`",
                value:"To add a manga in your manga list\nE.g.-`?am One Piece`"
            },
            {
                name:"?removemanga-`?rm`",
                value:"To remove a manga from your manga-list\nE.g.-`?rm One Piece`"
            },
            {
                name:"?removeallmanga-`?ram`, `?removemangaall`",
                value:"To remove all the manga from your anime-list"
            },
            {
                name:"-\nSearch commands",
                value:"You can use these commands to look up information on any anime or manga you're interested in."
            },
            {
                name:"?search, ?searchmanga-`?s`, `?ms`",
                value:"It will fetch a link for you so that you can info about your anime.\nFor Anime E.g.-`?s Naruto`\nFor Manga E.g.-`?sm Naruto`"
            }
            
        )
        .setFooter("Page 2/6 | Click on the react emoji for next page.");                                                          
        
        const embed3 = new Discord.MessageEmbed()
        .setColor('#a6e764')
        .setTitle('**Search Commands**')
        .setDescription('')
        .addFields(
            {
                name:"?databasefind - `?dbf`",
                value:"This is the command we use to obtain the specific anime id, which we can then use to retrieve more information about your anime.\nE.g.-`?dbf Naruto`\nNaruto-`20`\n(20 is the unique id you use to get more info)\nNaruto: Shippuuden-`1735`"

            },
            {
                name: "?databaseanimeid- `?dbid`",
                value:"Use the unique anime id from ?db to find all the info about your anime\nE.g.-`?dbid 20`"
            },
            {
                name:"?databasesort-`?dbs`",
                value:"If you want the database results sorted for finding the unique anime id use this command\nE.g.-`?dbs Naruto`"
            },
            {
                name:"?random-`?r`",
                value:"Use it to get a random anime you want to watch"

            },
            {
                name:"?moreinfo, ?mmoreinfo",
                value:"`?moreinfo` for top 5 results of your anime and `?mmoreinfo` for top 5 results of your manga."
            }
        )
        .setFooter("Page 3/6 | Click on the react emoji for next page.");

        const embed4 = new Discord.MessageEmbed()
        .setColor('#b3ea7a')
        .setTitle('Anime Suggestions Commands')
        .setDescription("I suggest using `?anime` and `?manga` to get detailed information about the suggestions commands.\n\nUse these commands to get your favourite **Genre**.\n\n?shounen-`?shonen`, `?zerotohero`\n?supernatural\n?sliceoflife-`?life`\n?romance\n?magic-`?fairytale`\n?adventure-`?action`\n?comedy-`?funny`\n?sports-`?fitness`\n?drama-`?crime`\n?fantasy-`?super-power`\n?horror-`?dementia`\n?physchological-`?truecrime`\n?mystery-`?suspense`, `?thriller`\n?sci-fi-`?mecha`,`?shounenai`\n?isekai-`?otherworld`,`?differentworld`")
        .setFooter("Page 4/6 | Click on the react emoji for next page.");

        const embed5 = new Discord.MessageEmbed()
        .setColor('#bfee90')
        .setTitle('Manga Suggestions Commands')
        .setDescription("I suggest using `?anime` and `?manga` to get detailed information about the suggestions commands.\n\nUse these commands to get your favourite **Genre**.\n\n?mshounen-`?mshonen`, `?mzerotohero`\n?msupernatural\n?msliceoflife-`?mrealism`\n?mromance\n?mmagic-`?mfairytale`\n?madventure-`?maction`\n?mcomedy-`?mfunny`\n?msports-`?mfitness`\n?mdrama-`?mcrime`\n?mfantasy-`?msuper-power`\n?mhorror-`?mdementia`\n?mphyschological-`?mtruecrime`\n?mmystery-`?msuspense`, `?mthriller`\n?msci-fi-`?mmecha`,`?mshounenai`\n?misekai-`?motherworld`,`?mdifferentworld`")
        .setFooter("Page 5/6 | Click on the react emoji for next page.");

        const embed6 = new Discord.MessageEmbed()
        .setColor('#bfee90')
        .setTitle("Roleplay - ?rp")
        .setDescription("\n`tch`, `hug`, `happy`, `pat`, `peck`, `kiss`, `tsk`, `punch`, `kill`, `angry`, `nuzzle`, `cringe`, `slap`, `boo`, `cool`, `swag`, `think`, `nope`, `no`, `yeah`, `yes`, `bored`, `bonk`, `?anime`, `ignore`\nE.g. - ?rp hug \n\n**Tag User**\n1) Use tag `?rp pat @ron`\n2) Use user id `?rp yes 75451845171618415`\n3)Use - to tag your custom name e.g. `?rp kill -ron`\n4)Use ?anime to tag random anime characters `?rp laugh ?anime`\n5)Use ?random to tag random anime characters and celebrities E.g. - `?rp hug ?random`")
        .setFooter("Page 6/6 | Support us by using $support and $vote")
        let pages = [embed, embed2, embed3, embed4, embed5, embed6]
        let page = 0;


        let msg = await message.channel.send(embed);

        if(pages.length === 1) return;

        await msg.react("👈");
        
        await msg.react("👉");

        const nextembed = (reaction, user) => reaction.emoji.name === '👈' ;
        const previousembed = (reaction, user) => reaction.emoji.name === '👉' ;

        const previous = msg.createReactionCollector(nextembed, {time:900000, dispose: true});

        const next = msg.createReactionCollector(previousembed,{time:900000, dispose: true})
        
        next.on("collect", async () => {

            page = page + 1;
            msg.edit(pages[page]);
            console.log(page)
            if (page === 6){
                page=0
                msg.edit(pages[page])

            }

        })
        next.on("remove",async () =>{

            page = page + 1;
            msg.edit(pages[page]);
            console.log(page)
            if (page === 6){
                page=0
                msg.edit(pages[page])

            }

        })

        previous.on("collect",async () => {
            page = page - 1;
            msg.edit(pages[page]);
            console.log(page)
            if (page === -1){
                page=5
                msg.edit(pages[page])

            }


        })
        
        previous.on("remove",async () => {

            page = page - 1;
            msg.edit(pages[page]);
            console.log(page)
            if (page === -1){
                page=4
                msg.edit(pages[page])

            }
            

        })
    }
}
//suggestion manga
//sugestion anime
//watchlist commands
//info about bot
//for support