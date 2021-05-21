const Discord = require('discord.js');
const mongoose = require('mongoose');
const client = new Discord.Client();

client.commands = new Discord.Collection();

client.events = new Discord.Collection();



['command_handler', 'event_handler'].forEach( handler =>{
    require(`./handlers/${handler}`)(client, Discord);
     
});

mongoose.connect(process.env.mongotoken, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{
    console.log('connected to the database');

}).catch((err) =>{
    console.log(err);
})




// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// for ( const file of commandFiles){
//     const command = require(`./commands/${file}`);
//     client.commands.set(command.name, command);

// }



client.login(process.env.token);