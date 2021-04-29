const Disord = require("discord.js");
const request = require("node-superfetch");


module.exports = {

    name:'msearch',
    aliases:'ms',
    description:'search your manga',
    async execute(client, message, args, Discord){
        let googlekey = "AIzaSyA6ubVPSjTFguKFGZHySQ3J-eYth5hP4ho";
        let id = "294d6c90688cd8f4c"; // search engine id
        let query = args.join(" ");
        let href;

        if (!query) return message.channel.send("You forgot to include the title of the manga, mate.\nE.g.-`?ms One Piece`");
        href = await search(query);

        if(!href) return message.channel.send("You forgot to include the title of the manga, mate.\nE.g.-`?ms One Piece`");

        
        message.channel.send(href.link +"\n For more info please use ?mmoreinfo ");
        
        async function search(query) {

            const {body} = await request.get("https://www.googleapis.com/customsearch/v1").query({
                key: googlekey, cx: id, safe: "off", q: query +"manga"

            });

            if(!body.items) return null;
            return body.items[0];
        }


    
    
    
    
    }





}