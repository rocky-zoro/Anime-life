const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
module.exports = {
    name:'okaymonsterdeletethatstuffbecauseithasalotofduplicates',
    desciption:"check your watchlist",

    
    async execute(client, message, args, Discord, profiledata){

        
    let on = await mongoose.connection.db.collection("animeinfo",{

    })
    
    let info = await on.aggregate([
        {
            "$group": {
                _id : { uid : "$uid"},
                uids:{$addToSet:"$_id"},
                count:{$sum: 1}
            }

        },{
            
            "$match":{

                count:{"$gt": 1}

            }

        }
    ]).forEach(function(doc){

        doc.uids.shift();
        on.deleteMany({
            _id:{$in : doc.uids}
        });

    })
    message.react('✔')
    }

}