const {MessageAttachment} = require('discord.js');
const path = require('path');

module.exports = {

    name:'yooooo',
    aliases:['yo', 'yoo', 'yooo', 'yoooo'],
    description:'yooooo',
    async execute(client, message, args, Discord){
        const attachment = new MessageAttachment(path.join(__dirname, './video/yo.mp4'));
        message.reply(attachment);

    }
}