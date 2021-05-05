const fetch = require("node-fetch");
module.exports = {

    name:'roleplay',
    aliases:['rp'],
    description:'roleplay',
    async execute(client, message, args, Discord){

        try {

        
        let note = args.join(" ").trim().split(" ",50);
        if(!note[0]) return message.channel.send("That was incorrect mate. Do it in this manner.\nE.g.-`?rp Kawaii `, `?roleplay Pat`");
        
        let beauseof = " "+ note.slice(2,50).join(" ");
        let taggeduser;
        let taggedsomeoneornot = "yes";
        let st;
        let doing = [" "];
        let asinglehuman = [" "];
        let catchederror = "no";



        
        
        if(!note[1] || note[1]==="no-one"){
            taggedsomeoneornot = "no";
            const userfullname =["Elon Musk", "Lionel Messi","Sylvester Stallone", "PewDiePie" ,"Mahatma Gandhi" ,"Barack Obama", "Drake", "Shaquille O'Neal", "John Cena", "Leonardo DiCapiro", "Usain Bolt", "Pelé", "Morgan Freeman", "Katy Perry", "Tom Hanks", "Taylor Swift", "Freddie Mercury", "Albert Einstein", "Jay-Z", "Eminem", "Donald Trump", "Jackie Chan", "Princess Diana", "Tom Cruise", "Muhammad Ali", "Madonna", "Rihanna", "Jesus Christ", "Arnold Schwarzenegger", "Michael Jordan", "Bruce Lee", "Will Smith", "Kanye West", "Elvis Presley", "Beyonce", "Oprah" ,"Michael Jackson", "Batman", "Superman", "Naruto", "Luffy", "Levi", "Itachi Uchiha", "Zoro", "Cristiano Ronaldo","Stephen Hawking", "The Undertaker", "Robert Downey Jr", "Justin Bieber"]
            const indexfullname = Math.floor(Math.random() * userfullname.length);
        
            taggeduser = userfullname[indexfullname];
            catchederror = "yes"
            st = userfullname[indexfullname];

        }else if(note[1].startsWith('<@') && note[1].endsWith('>')) {
            try{
                    mention = note[1].slice(2,-1)
                if(mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
                const infotaggeduser= await message.guild.members.fetch(mention)
                taggeduser = infotaggeduser.displayName;
            } catch{    
                const userfullname =["Elon Musk", "Lionel Messi","Sylvester Stallone", "PewDiePie" ,"Mahatma Gandhi" ,"Barack Obama", "Drake", "Shaquille O'Neal", "John Cena", "Leonardo DiCapiro", "Usain Bolt", "Pelé", "Morgan Freeman", "Katy Perry", "Tom Hanks", "Taylor Swift", "Freddie Mercury", "Albert Einstein", "Jay-Z", "Eminem", "Donald Trump", "Jackie Chan", "Princess Diana", "Tom Cruise", "Muhammad Ali", "Madonna", "Rihanna", "Jesus Christ", "Arnold Schwarzenegger", "Michael Jordan", "Bruce Lee", "Will Smith", "Kanye West", "Elvis Presley", "Beyonce", "Oprah" ,"Michael Jackson", "Batman", "Superman", "Naruto", "Luffy", "Levi", "Itachi Uchiha", "Zoro", "Cristiano Ronaldo","Stephen Hawking", "The Undertaker", "Robert Downey Jr", "Justin Bieber"]
            const indexfullname = Math.floor(Math.random() * userfullname.length);
        
            taggeduser = userfullname[indexfullname];
            catchederror = "yes"

        
            }
        } else if (note[1].match(/^[0-9]+$/)) {
            try{
            const infotaggeduser = await message.guild.members.fetch(note[1]);
            taggeduser = infotaggeduser.displayName;} catch{
                const userfullname =["Elon Musk", "Lionel Messi","Sylvester Stallone", "PewDiePie" ,"Barack Obama", "Drake", "Mahatma Gandhi", "Shaquille O'Neal", "John Cena", "Leonardo DiCapiro", "Usain Bolt", "Pelé", "Morgan Freeman", "Katy Perry", "Tom Hanks", "Taylor Swift", "Freddie Mercury", "Albert Einstein", "Jay-Z", "Eminem", "Donald Trump", "Jackie Chan", "Princess Diana", "Tom Cruise", "Muhammad Ali", "Madonna", "Rihanna", "Jesus Christ", "Arnold Schwarzenegger", "Michael Jordan", "Bruce Lee", "Will Smith", "Kanye West", "Elvis Presley", "Beyonce", "Oprah" ,"Michael Jackson", "Batman", "Superman", "Naruto", "Luffy", "Levi", "Itachi Uchiha", "Zoro", "Cristiano Ronaldo","Stephen Hawking", "The Undertaker", "Robert Downey Jr", "Justin Bieber"]
                const indexfullname = Math.floor(Math.random() * userfullname.length);
            
                taggeduser = userfullname[indexfullname];
                catchederror = "yes";


            
            }

        } else if(note[1].startsWith('-')){
            someoneidk = note[1].slice(1,50);
            taggeduser = someoneidk;  //Please instead of space use _______ underscore okay.
        } else if(note[1] === "?anime"){
                animecharactersname = ["Lelouch Lamperouge anime", "Monkey D. Luffy anime", "L Lawliet  anime", "Levi anime", "Light Yagami  anime", "Roronoa Zoro anime", "Naruto Uzumaki  anime", "Edward Elric  anime", "Killua Zoldyck  anime", "Rintarou Okabe anime", "Kurisu Makis anime", "Itachi Uchiha  anime", "Rem anime", "Gintoki Sakata  anime", "Hachiman Hikigaya anime", "Eren Yeager  anime", "Mikasa Ackerman  anime", "Emilia anime", "Guts anime", "Saitama anime", "Kazuto Kirigaya  anime", "Todoroki Shouto anime", "Kakashi Hatake anime", "Kaneki Ken anime", "Spike Spiegel anime", "Sanji anime", "Son Gokuu anime", "Nico Robin anime", "Yato anime", "Fujiwara Chika anime", "Taiga Aisaka  anime", "Hisoka anime", "Asuna Yuuki  anime", "Sasuke Uchiha anime", "Megumin anime", "Hitagi Senjougahara anime", "Zero Two anime", "Ichigo anime", "Tanjirou Kamado anime", "Shinomiya Kaguya anime", "Roy Mustang  anime", "Joestar Joseph anime", "Saber anime", "Kamina anime", "Yuno Gasai  anime", "Shinobu Oshino anime", "Yukino Yukinoshita anime", "Gojou Satoru anime", "Yuu Ishigami  anime", "Mai Sakurajima anime", "Kurosaki  anime", "Osamu Dazai  anime", "Onizuka Eikichi anime", "Izuku Midoriya  anime", "Alucard anime", "Nezuko anime", "Koyomi Araragi anime", "Holo anime", "Zenitsu Agatsuma  anime", "Kurumi Tokisaki anime", "​Zero Two anime", "Rem anime", "Megumin anime", "Mai Sakurajima anime", "Nezuko Kamado anime", "Mikasa Ackerman anime", "Asuna anime", "Rias Gremory anime", "Hange Zoë anime", "Chika Fujiwara anime", "Yumeko Jabami anime", "Emilia anime", "Bongo Cat anime", "Aqua anime", "Violet Evergarden anime", "Albedo anime", "Akame anime", "Shinobu Kochou anime", "Levi anime", "Himiko Toga anime", "Kaguya Shinomiya anime", "Ram anime", "Miku Nakano anime", "Rin Tohsaka anime", "Shiro anime", "Kanna Kamui anime", "Akeno Himejima anime", "Ai Hayasaka anime", "Hinata Hyuuga anime", "Raphtalia anime", "Kurumi Tokisaki anime", "Rikka Takanashi anime", "Satoru Gojou anime", "Esdeath anime", "Sinon anime", "Nami anime", "Darkness anime", "Neferpitou anime", "Shoto Todoroki anime", "Nino Nakano anime", "Killua Zoldyck anime", "Tohru anime", "Ochako Uraraka anime", "Chizuru Ichinose anime", "Katsuki Bakugou anime", "Erza Scarlet anime", "Nyan Cat anime", "Kurisu Makise anime", "Taiga Aisaka anime", "Ryuuko Matoi anime", "Asuka Langley Soryu anime", "Eren Jaeger anime", "C.C. anime", "Truck-kun anime", "Shouko Nishimiya anime", "Annie Leonhart anime", "Momo Yaoyorozu anime", "Osamu Dazai anime", "Kaori Miyazono anime", "Sasha Braus anime", "Mitsuri Kanroji anime", "Gawr Gura anime", "Kanao Tsuyuri anime", "Yuno Gasai anime", "Mary Saotome anime", "Nico Robin anime", "Tsuyu Asui anime", "Hestia anime", "Touka Kirishima anime", "Shinobu Oshino anime", "Lucy Heartfilia anime", "Tanjirou Kamado anime", "Krista Lenz anime", "Alice Synthesis Thirty anime", "Izuku Midoriya anime", "Erina Nakiri anime", "Rei Ayanami anime", "Yukino Yukinoshita anime", "Giyuu Tomioka anime", "Mitsuha Miyamizu anime", "Jibril anime", "Echidna anime", "Bowsette anime", "Dabi anime", "Ichigo anime", "Lucoa anime", "Ken Kaneki anime", "Tobio Kageyama anime", "Crona anime", "Nao Tomori anime", "Kenma Kozume anime", "Hitagi Senjougahara anime", "Itsuki Nakano anime", "Tooru Oikawa anime", "Tatsumaki anime", "Armin Arlert anime", "Eri anime", "Nejire Hadou anime", "Tanya Degurechaff anime", "Boa Hancock anime", "Shouyou Hinata anime", "Mashiro Shiina anime", "Tsunade anime", "Tamaki Kotatsu anime", "Rio Futaba anime", "Yotsuba Nakano anime", "Komi Shouko anime", "Kurapika anime", "Kyouka Jirou anime", "Midnight anime", "Zenitsu Agatsuma anime", "Nanika anime", "Naruto Uzumaki anime", "Emma anime", "Monkey D. Luffy anime", "Hanako-kun anime", "Kakashi Hatake anime", "Mina Ashido anime", "L anime", "Alice Nakiri anime", "Inugami Korone anime", "Mirko anime", "Usagi Tsukino anime", "Booette anime", "Sakura Haruno anime", "Itachi Uchiha anime", "Schwi Dola anime", "Sumi Sakurasawa anime", "Senko anime", "Hisoka anime", "Kirari Momobami anime", "Eijirou Kirishima anime", "Elizabeth Liones anime", "Aiz Wallenstein anime", "DIO anime", "Hawks anime", "Nagatoro-san anime", "Sasuke Uchiha anime", "Doge anime", "Mirai Kuriyama anime", "Orochimaru anime", "Eru Chitanda anime", "Nobara Kugisakic anime", "Misa Amane anime", "Chitoge Kirisaki anime", "Inosuke Hashibira anime", "Ruka Sarashina anime", "Jolyne Cujoh anime", "Fubuki anime", "Grell Sutcliff anime", "Mt. Lady anime", "Mine anime", "Hana Uzaki anime", "Gon Freecss anime", "Kanae Kochou anime", "Ririka Momobami anime", "Yui Hirasawa anime", "Wiz anime", "Yuu Nishinoya anime", "Kyouko Hori anime", "Roronoa Zoro anime", "Ymir anime", "Tetsurou Kuroo anime", "Alluka Zoldyck anime", "Ichika Nakano anime", "Jotaro Kujo anime", "Yunyun anime", "Yato anime", "Yuuji Itadori anime", "Kaede Azusagawa anime", "Koneko Toujou anime", "Yui Yuigahama anime", "Koutarou Bokuto anime", "Sagiri Izumi anime", "Shinoa Hiiragi anime", "Maki Oze anime", "Noelle Silva anime", "Mio Akiyama anime", "Godzilla anime", "Kei Tsukishima anime", "Yoko Littner anime", "Diane anime", "Pieck Finger anime", "Denki Kaminari anime", "Megumi Fushiguro anime", "Yuuki Konno anime", "Nene Yashiro anime", "Black Hanekawa anime", "Runa Yomozuki anime", "Juvia Lockser anime", "Shouta Aizawa anime", "Leafa anime", "Miia anime", "Mei Misaki anime"]
                catchederror = "yes";
                const indexanimecharactersname = Math.floor(Math.random() * animecharactersname.length);

            
                taggeduser = animecharactersname[indexanimecharactersname];
        }else {
            const userfullname =["Elon Musk", "Lionel Messi","Sylvester Stallone", "PewDiePie" ,"Barack Obama", "Drake", "Mahatma Gandhi", "Shaquille O'Neal", "John Cena", "Leonardo DiCapiro", "Usain Bolt", "Pelé", "Morgan Freeman", "Katy Perry", "Tom Hanks", "Taylor Swift", "Freddie Mercury", "Albert Einstein", "Jay-Z", "Eminem", "Donald Trump", "Jackie Chan", "Princess Diana", "Tom Cruise", "Muhammad Ali", "Madonna", "Rihanna", "Jesus Christ", "Arnold Schwarzenegger", "Michael Jordan", "Bruce Lee", "Will Smith", "Kanye West", "Elvis Presley", "Beyonce", "Oprah" ,"Michael Jackson", "Batman", "Superman", "Naruto", "Luffy", "Levi", "Itachi Uchiha", "Zoro", "Cristiano Ronaldo","Stephen Hawking", "The Undertaker", "Robert Downey Jr", "Justin Bieber"]
                const indexfullname = Math.floor(Math.random() * userfullname.length);
            
                taggeduser = userfullname[indexfullname];
                catchederror = "yes"
        }
        
        
        
        
        
        switch(note[0]){
            case 'cute':
                st = "anime hug";
                limit = 10;
                break;

            case 'tch':
                st = 'tch';
                doing = [`is annoyed by ${taggeduser}`,`is displeased by${taggeduser}`];
                asinglehuman = ["is getting mad"];
                limit = 4;
                break;
        
            case 'laugh':
                st = 'anime laughing';
                limit = 15;
                doing = ["is teasing"];
                asinglehuman = ["is laughing"];
                break;
            case 'shy':
                st = 'anime shy';
                limit = 20;
                break;
            case 'yes':
                st = 'anime yes';
                limit = 8;
                break;
            case 'pat':
                st = 'anime pat';
                limit = 10;
                break;
            case 'kick':
                st = 'anime kick';
                limit = 10;
                break;
            case 'punch':
                st = 'anime punch';
                limit = 10;
                break;
            case 'slap':
                st = 'anime slap';
                limit = 10;
                break;
            case 'night':
                st = 'anime good night'; //cry, uwu, died, sorry,sleep,defeat, no bully, finger, boo, smirk, think, clap, swag
                limit = 10;
                break;
            case 'hehe':
                st = 'anime hehe';
                limit = 10;
                break;
            case 'okay':
                st = 'anime okay';
                limit = 2;
                break;
            case 'cry':
                st = 'anime cry';
                limit = 30;
                break;
            case 'uwu':
                st = 'anime love'
                limit = 15;
                break;
            default:
                searchterm = ["anime nope","anime no"]; //whichever user is tagged said no okay or someone else tagged Idk said no // message.author.name wants to say that
                doingwhat=[`is annoyed by this ${taggeduser}`,"happy"]
                limitforsearchterm = [50, 25]
                stno = Math.floor(Math.random()*searchterm.length);
                doing = [doingwhat[stno]];
                st = searchterm[stno];
                limit = limitforsearchterm[stno];
        
        }
        
        
        
        if(catchederror === "yes"){

            st = taggeduser;

        } else if (catchederror === "anime"){

            st = taggeduser;

        } else{

        }
        
        
        
        
        
        
        
        
        
        
        if(taggedsomeoneornot === "no"){

            singlehumanindexno = Math.floor(Math.random()*asinglehuman.length); 
            let url = `https://g.tenor.com/v1/search?q=${st}&key=${process.env.tenorkey}&limit=${limit}`;
                let response = await fetch(url);
                let json = await response.json();
                const index = Math.floor(Math.random() * json.results.length);
            
                const newEmbed = await new Discord.MessageEmbed()
                
                .setDescription(`**${message.author.username}** ${asinglehuman[singlehumanindexno]}${beauseof}`)
                .setTitle('Roleplay')
                .setColor('RANDOM')
                .setURL('https://discord.gg/adnga86cdA')
                .setImage(`${json.results[index].media[0].gif.url}`)
                .setFooter('Support us by using $support and $vote','https://imgur.com/22ncPbk.png')
                
                message.channel.send(newEmbed);


        } else{
            
            taggedhumanindexno = Math.floor(Math.random()*doing.length);//here is the error
            let url = `https://g.tenor.com/v1/search?q=${st}&key=${process.env.tenorkey}&limit=${limit}`;
                let response = await fetch(url);
                let json = await response.json();
                const index = Math.floor(Math.random() * json.results.length);
            
                const newEmbed = await new Discord.MessageEmbed()
                
                .setTitle(`${message.author.username} ${doing[taggedhumanindexno]}${beauseof}`)
                .setDescription('roleplay')
                .setColor('RANDOM')
                .setURL('https://discord.gg/adnga86cdA')
                .setImage(`${json.results[index].media[0].gif.url}`)
                .setFooter('Support us by using $support and $vote','https://imgur.com/22ncPbk.png')
                
                message.channel.send(newEmbed);

        
        }

            } catch (err) {
            console.error('not work');
        }


        
    }
}
