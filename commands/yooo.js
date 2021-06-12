const {MessageAttachment} = require('discord.js');

module.exports = {

    name:'yooooo',
    aliases:['yo', 'yoo', 'yooo', 'yoooo'],
    description:'yooooo',
    async execute(client, message, args, Discord){
        const attachment = new MessageAttachment('./video/yo.mp4');
        message.reply(attachment);

    }
}