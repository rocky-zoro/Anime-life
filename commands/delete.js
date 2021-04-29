const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
module.exports = {
    name:'okaymonsterdeletethatstuffbecauseithasalotofduplicatesIsuggestusethatcommandmaybeitwillworkidk',
    desciption:"check your watchlist",

    
    async execute(client, message, args, Discord, profiledata){

        
    let on = await mongoose.connection.db.collection("animeinfo",{

    })
    
    let info = await on.aggregate([
        {
            "$group": {
                _id : { uid : "$uid"},
                uid:{$addToSet:"$_id"},
                count:{$sum: 1}
            }

        },{
            
            "$match":{

                count:{"$gt": 1}

            }

        }
    ]).forEach(function(doc){

        doc.uid.shift();
        on.deleteMany({
            _id:{$in : doc.uid}
        });

    })
    }

}