
module.exports = {

    name:'ahelp',
    aliases:['ainfo','ahelp','amoreinfo','information','ah','ahe','ahel'],
    description:'help,info = command',
    async execute(client, message, args, Discord){

        const embed = new Discord.MessageEmbed()
        .setColor('#bfee90')
        .setTitle("Roleplay - ?rp")
        .setDescription("**Roleplay commands**\n`tch`, `hug`, `happy`, `pat`, `peck`, `kiss`, `tsk`, `punch`, `kill`, `angry`, `nuzzle`, `cringe`, `slap`, `boo`, `cool`, `swag`, `think`, `nope`, `no`, `yeah`, `yes`, `bored`, `bonk`, `?anime`, `ignore`, `dance`, `bow`,`ofcourse`, `cheer`, `cuddle`, `nose-bleed`, `dance`, `dead`, `dab`, `cry`, `hate`, `glomp`, `love`, `indeed`, `run`, `ofcourse`, `kick`, `bye`, `hi`, `thanks`, `stab`, `thumbsup`, `what`, `poke`, `beg`, `drool`, `sad`, `die`, `phew`, `nods`, `stomp`, `tremble`, `face-palm`, `kawaii`, `nani`, `wait`, `sweat` \nE.g. - `?rp hug` \n\n**Tag User**\n- Tag by @\nE.g. - `?rp pat @ron`\n- Tag by user id \nE.g. - `?rp yes 75451845171618415`\n- Tag your custom name by using hyphen **-**.\nE.g. - `?rp kill -ron`\n- Tag random anime characters by using **?anime**.\nE.g. - `?rp laugh ?anime`\n- Tag random anime characters and celebrities by using **?random**.\nE.g. - `?rp hug ?random`")
        .setFooter("Page 1/7 | Click on the react emoji for next page.")


        const embed2 = new Discord.MessageEmbed()
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
        .setFooter("Page 2/7 | Click on the react emoji for next page.");
        
        const embed3 = new Discord.MessageEmbed()
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
        .setFooter("Page 3/7 | Click on the react emoji for next page.");                                                          
        
        const embed4 = new Discord.MessageEmbed()
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
        .setFooter("Page 4/7 | Click on the react emoji for next page.");

        const embed5 = new Discord.MessageEmbed()
        .setColor('#b3ea7a')
        .setTitle('Anime Suggestions Commands')
        .setDescription("I suggest using `?anime` and `?manga` to get detailed information about the suggestions commands.\n\nUse these commands to get your favourite **Genre**.\n\n?shounen-`?shonen`, `?zerotohero`\n?supernatural\n?sliceoflife-`?life`\n?romance\n?magic-`?fairytale`\n?adventure-`?action`\n?comedy-`?funny`\n?sports-`?fitness`\n?drama-`?crime`\n?fantasy-`?super-power`\n?horror-`?dementia`\n?physchological-`?truecrime`\n?mystery-`?suspense`, `?thriller`\n?sci-fi-`?mecha`,`?shounenai`\n?isekai-`?otherworld`,`?differentworld`")
        .setFooter("Page 5/7 | Click on the react emoji for next page.");

        const embed6 = new Discord.MessageEmbed()
        .setColor('#bfee90')
        .setTitle('Manga Suggestions Commands')
        .setDescription("I suggest using `?anime` and `?manga` to get detailed information about the suggestions commands.\n\nUse these commands to get your favourite **Genre**.\n\n?mshounen-`?mshonen`, `?mzerotohero`\n?msupernatural\n?msliceoflife-`?mrealism`\n?mromance\n?mmagic-`?mfairytale`\n?madventure-`?maction`\n?mcomedy-`?mfunny`\n?msports-`?mfitness`\n?mdrama-`?mcrime`\n?mfantasy-`?msuper-power`\n?mhorror-`?mdementia`\n?mphyschological-`?mtruecrime`\n?mmystery-`?msuspense`, `?mthriller`\n?msci-fi-`?mmecha`,`?mshounenai`\n?misekai-`?motherworld`,`?mdifferentworld`")
        .setFooter("Page 6/7 | Click on the react emoji for next page.");
        
        const embed7 = new Discord.MessageEmbed()
        .setColor('#bfee90')
        .setTitle('Meme - ?i, ?image')
        .setDescription("**Profile Pic commands**\n `birth`, `beautiful`, `cancer`, `mario`, `classic`\n\n**Text Commands**\n`end`, `retarded`, `really`, `brain`, `name`, `crying`, `lisa`, `queues`, `sleep`, `talk`")
        .setFooter("Page 7/7 | Click on the react emoji for the next page.")

        let pages = [embed, embed2, embed3, embed4, embed5, embed6, embed7]
        let page = 0;


        let msg = await message.channel.send(embed);

        if(pages.length === 1) return;

        await msg.react("????");
        
        await msg.react("????");

        const nextembed = (reaction) => reaction.emoji.name === '????' ;
        const previousembed = (reaction) => reaction.emoji.name === '????' ;

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

//suggestion manga
//sugestion anime
//watchlist commands
//info about bot
//for support