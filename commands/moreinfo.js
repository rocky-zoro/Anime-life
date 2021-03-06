const Disord = require("discord.js");
const { link } = require("node-superfetch");
const request = require("node-superfetch");


module.exports = {

    name:'moreinfo',
    description:'search your anime',
    async execute(client, message, args, Discord){
        let googlekey = process.env.googleid;
        let id = process.env.searchid; // search engine id
        let query = args.join(" ");
        let href;

        if (!query) return message.channel.send("You forgot to include the title of the anime, mate.\nE.g.-`?moreinfo One Piece`");
        href = await search(query);

        if(!href) return message.channel.send("You forgot to include the title of the anime, mate.\nE.g.-`?moreinfo One Piece`");
      
        const embed = new Discord.MessageEmbed()
        .setTitle("For more info about your show/movie.\n")
        .setURL(href.first.link)
        .setDescription(`:one:${href.first.link} \n\n:two:${href.second.link} \n\n:three:${href.three.link} \n\n:four:${href.four.link} \n\n:five:${href.five.link}`)
        .setColor("RANDOM")
        .setFooter('Support us')
        return message.channel.send(embed);


        

        async function search(query) {

            const {body} = await request.get("https://www.googleapis.com/customsearch/v1").query({
                key: googlekey, cx: id, safe: "off", q: query +"anime wiki"

            });

            if(!body.items) return null;
            
            return {
                first: body.items[0],
                second: body.items[1],
                three: body.items[2],
                four: body.items[3],
                five: body.items[4]

            
            };
            
        }


    
    
    
    
    }





}