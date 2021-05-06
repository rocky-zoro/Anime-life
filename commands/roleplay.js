const fetch = require("node-fetch");
module.exports = {

    name:'roleplay',
    aliases:['rp'],
    description:'roleplay',
    async execute(client, message, args, Discord){

        try {

        
        let note = args.join(" ").trim().split(" ",50);
        if(!note[0]) return message.channel.send("That was incorrect mate. Do it in this manner.\nE.g.-`?rp Kawaii `, `?roleplay Pat`");
        
        let beauseof = "-"+ note.slice(2,50).join(" ");
        let taggeduser;
        let taggedsomeoneornot = "yes";
        let st;
        let doing = [" "];
        let asinglehuman = [" "];


        
        
        if (!note[1] || note[1]==="no-one") {

            taggedsomeoneornot = "no";

        } else if (note[1].startsWith('<@') && note[1].endsWith('>')) {
            
            try{

                    mention = note[1].slice(2,-1)

                if (mention.startsWith('!')) {

                    mention = mention.slice(1);
                
                }

                const infotaggeduser= await message.guild.members.fetch(mention)
                taggeduser = infotaggeduser.displayName;
            
            } catch {

                const userfullname =["Elon Musk", "Lionel Messi","Sylvester Stallone", "PewDiePie", "Barack Obama", "Drake", "Shaquille O'Neal", "John Cena", "Leonardo DiCapiro", "Usain Bolt", "Pelé", "Morgan Freeman", "Katy Perry", "Tom Hanks", "Taylor Swift", "Freddie Mercury", "Albert Einstein", "Jay-Z", "Eminem", "Donald Trump", "Jackie Chan", "Princess Diana", "Tom Cruise", "Muhammad Ali", "Madonna", "Rihanna", "Jesus Christ", "Arnold Schwarzenegger", "Michael Jordan", "Bruce Lee", "Will Smith", "Kanye West", "Elvis Presley", "Beyonce", "Oprah" ,"Michael Jackson", "Batman", "Superman", "Naruto", "Luffy", "Levi", "Itachi Uchiha", "Zoro", "Cristiano Ronaldo","Stephen Hawking", "The Undertaker", "Robert Downey Jr", "Justin Bieber"]
                const indexfullname = Math.floor(Math.random() * userfullname.length);
                taggeduser = userfullname[indexfullname];
            
            }
        
        } else if (note[1].match(/^[0-9]+$/)) {
            
            try{

                const infotaggeduser = await message.guild.members.fetch(note[1]);
                taggeduser = infotaggeduser.displayName;

            } catch {

                const userfullname =["Elon Musk", "Lionel Messi","Sylvester Stallone", "PewDiePie" ,"Barack Obama", "Drake", "Shaquille O'Neal", "John Cena", "Leonardo DiCapiro", "Usain Bolt", "Pelé", "Morgan Freeman", "Katy Perry", "Tom Hanks", "Taylor Swift", "Freddie Mercury", "Albert Einstein", "Jay-Z", "Eminem", "Donald Trump", "Jackie Chan", "Princess Diana", "Tom Cruise", "Muhammad Ali", "Madonna", "Rihanna", "Jesus Christ", "Arnold Schwarzenegger", "Michael Jordan", "Bruce Lee", "Will Smith", "Kanye West", "Elvis Presley", "Beyonce", "Oprah" ,"Michael Jackson", "Batman", "Superman", "Naruto", "Luffy", "Levi", "Itachi Uchiha", "Zoro", "Cristiano Ronaldo","Stephen Hawking", "The Undertaker", "Robert Downey Jr", "Justin Bieber"]
                const indexfullname = Math.floor(Math.random() * userfullname.length);
                taggeduser = userfullname[indexfullname];
            
            }

        } else if (note[1].startsWith('-')) {

                someonetheywanttoadd = note[1].slice(1,50);
                taggeduser = someonetheywanttoadd;  //Please instead of space use _______ underscore okay.
            
        } else if (note[1] === "?anime") {
            
                animecharactersname = ["Lelouch Lamperouge", "Monkey D. Luffy", "L Lawliet", "Levi", "Light Yagami", "Roronoa Zoro", "Naruto Uzumaki", "Edward Elric", "Killua Zoldyck", "Rintarou Okabe", "Kurisu Makis", "Itachi Uchiha", "Rem", "Gintoki Sakata", "Hachiman Hikigaya", "Eren Yeager", "Mikasa Ackerman", "Emilia", "Guts", "Saitama", "Kazuto Kirigaya", "Todoroki Shouto", "Kakashi Hatake", "Kaneki Ken", "Spike Spiegel", "Sanji", "Son Gokuu", "Nico Robin", "Yato", "Fujiwara Chika", "Taiga Aisaka", "Hisoka", "Asuna Yuuki", "Sasuke Uchiha", "Megumin", "Hitagi Senjougahara", "Zero Two", "Ichigo", "Tanjirou Kamado", "Shinomiya Kaguya", "Roy Mustang", "Joestar Joseph", "Saber", "Kamina", "Yuno Gasai", "Shinobu Oshino", "Yukino Yukinoshita", "Gojou Satoru", "Yuu Ishigami", "Mai Sakurajima", "Kurosaki", "Osamu Dazai", "Onizuka Eikichi", "Izuku Midoriya", "Alucard", "Nezuko", "Koyomi Araragi", "Holo Anime", "Zenitsu Agatsuma", "Kurumi Tokisaki", "​Zero Two", "Rem", "Megumin", "Mai Sakurajima", "Nezuko Kamado", "Mikasa Ackerman", "Asuna", "Rias Gremory", "Hange Zoë", "Chika Fujiwara", "Yumeko Jabami", "Emilia", "Bongo Cat", "Aqua", "Violet Evergarden", "Albedo", "Akame", "Shinobu Kochou", "Levi", "Himiko Toga", "Kaguya Shinomiya", "Ram", "Miku Nakano", "Rin Tohsaka", "Shiro", "Kanna Kamui", "Akeno Himejima", "Ai Hayasaka", "Hinata Hyuuga", "Raphtalia", "Kurumi Tokisaki", "Rikka Takanashi", "Satoru Gojou", "Esdeath", "Sinon", "Nami", "Darkness", "Neferpitou", "Shoto Todoroki", "Nino Nakano", "Killua Zoldyck", "Tohru", "Ochako Uraraka", "Chizuru Ichinose", "Katsuki Bakugou", "Erza Scarlet", "Nyan Cat", "Kurisu Makise", "Taiga Aisaka", "Ryuuko Matoi", "Asuka Langley Soryu", "Eren Jaeger", "C.C.", "Truck-kun", "Shouko Nishimiya", "Annie Leonhart", "Momo Yaoyorozu", "Osamu Dazai", "Kaori Miyazono", "Sasha Braus", "Mitsuri Kanroji", "Gawr Gura", "Kanao Tsuyuri", "Yuno Gasai", "Mary Saotome", "Nico Robin", "Tsuyu Asui", "Hestia", "Touka Kirishima", "Shinobu Oshino", "Lucy Heartfilia", "Tanjirou Kamado", "Krista Lenz", "Alice Synthesis Thirty", "Izuku Midoriya", "Erina Nakiri", "Rei Ayanami", "Yukino Yukinoshita", "Giyuu Tomioka", "Mitsuha Miyamizu", "Jibril", "Echidna", "Bowsette", "Dabi", "Ichigo", "Lucoa", "Ken Kaneki", "Tobio Kageyama", "Crona", "Nao Tomori", "Kenma Kozume", "Hitagi Senjougahara", "Itsuki Nakano", "Tooru Oikawa", "Tatsumaki", "Armin Arlert", "Eri", "Nejire Hadou", "Tanya Degurechaff", "Boa Hancock", "Shouyou Hinata", "Mashiro Shiina", "Tsunade", "Tamaki Kotatsu", "Rio Futaba", "Yotsuba Nakano", "Komi Shouko", "Kurapika", "Kyouka Jirou", "Midnight", "Zenitsu Agatsuma", "Nanika", "Naruto Uzumaki", "Emma", "Monkey D. Luffy", "Hanako-kun", "Kakashi Hatake", "Mina Ashido", "L", "Alice Nakiri", "Inugami Korone", "Mirko", "Usagi Tsukino", "Booette", "Sakura Haruno", "Itachi Uchiha", "Schwi Dola", "Sumi Sakurasawa", "Senko", "Hisoka", "Kirari Momobami", "Eijirou Kirishima", "Elizabeth Liones", "Aiz Wallenstein", "DIO", "Hawks", "Nagatoro-san", "Sasuke Uchiha", "Doge", "Mirai Kuriyama", "Orochimaru", "Eru Chitanda", "Nobara Kugisakic", "Misa Amane", "Chitoge Kirisaki", "Inosuke Hashibira", "Ruka Sarashina", "Jolyne Cujoh", "Fubuki", "Grell Sutcliff", "Mt. Lady", "Mine", "Hana Uzaki", "Gon Freecss", "Kanae Kochou", "Ririka Momobami", "Yui Hirasawa", "Wiz", "Yuu Nishinoya", "Kyouko Hori", "Roronoa Zoro", "Ymir", "Tetsurou Kuroo", "Alluka Zoldyck", "Ichika Nakano", "Jotaro Kujo", "Yunyun", "Yato", "Yuuji Itadori", "Kaede Azusagawa", "Koneko Toujou", "Yui Yuigahama", "Koutarou Bokuto", "Sagiri Izumi", "Shinoa Hiiragi", "Maki Oze", "Noelle Silva", "Mio Akiyama", "Godzilla", "Kei Tsukishima", "Yoko Littner", "Diane", "Pieck Finger", "Denki Kaminari", "Megumi Fushiguro", "Yuuki Konno", "Nene Yashiro", "Black Hanekawa", "Runa Yomozuki", "Juvia Lockser", "Shouta Aizawa", "Leafa", "Miia", "Mei Misaki"]
                const indexanimecharactersname = Math.floor(Math.random() * animecharactersname.length);
                taggeduser = animecharactersname[indexanimecharactersname];
               
        } else if (note[1] === "?random") {

                randomcharactersname = ["Elon Musk", "Lionel Messi","Sylvester Stallone", "PewDiePie" ,"Barack Obama", "Drake", "Shaquille O'Neal", "John Cena", "Leonardo DiCapiro", "Usain Bolt", "Pelé", "Morgan Freeman", "Katy Perry", "Tom Hanks", "Taylor Swift", "Freddie Mercury", "Albert Einstein", "Jay-Z", "Eminem", "Donald Trump", "Jackie Chan", "Princess Diana", "Tom Cruise", "Muhammad Ali", "Madonna", "Rihanna", "Jesus Christ", "Arnold Schwarzenegger", "Michael Jordan", "Bruce Lee", "Will Smith", "Kanye West", "Elvis Presley", "Beyonce", "Oprah" ,"Michael Jackson", "Batman", "Superman", "Naruto", "Luffy", "Levi", "Itachi Uchiha", "Zoro", "Cristiano Ronaldo","Stephen Hawking", "The Undertaker", "Robert Downey Jr", "Justin Bieber", "Lelouch Lamperouge", "Monkey D. Luffy", "L Lawliet", "Levi", "Light Yagami", "Roronoa Zoro", "Naruto Uzumaki", "Edward Elric", "Killua Zoldyck", "Rintarou Okabe", "Kurisu Makis", "Itachi Uchiha", "Rem", "Gintoki Sakata", "Hachiman Hikigaya", "Eren Yeager", "Mikasa Ackerman", "Emilia", "Guts", "Saitama", "Kazuto Kirigaya", "Todoroki Shouto", "Kakashi Hatake", "Kaneki Ken", "Spike Spiegel", "Sanji", "Son Gokuu", "Nico Robin", "Yato", "Fujiwara Chika", "Taiga Aisaka", "Hisoka", "Asuna Yuuki", "Sasuke Uchiha", "Megumin", "Hitagi Senjougahara", "Zero Two", "Ichigo", "Tanjirou Kamado", "Shinomiya Kaguya", "Roy Mustang", "Joestar Joseph", "Saber", "Kamina", "Yuno Gasai", "Shinobu Oshino", "Yukino Yukinoshita", "Gojou Satoru", "Yuu Ishigami", "Mai Sakurajima", "Kurosaki", "Osamu Dazai", "Onizuka Eikichi", "Izuku Midoriya", "Alucard", "Nezuko", "Koyomi Araragi", "Holo Anime", "Zenitsu Agatsuma", "Kurumi Tokisaki", "​Zero Two", "Rem", "Megumin", "Mai Sakurajima", "Nezuko Kamado", "Mikasa Ackerman", "Asuna", "Rias Gremory", "Hange Zoë", "Chika Fujiwara", "Yumeko Jabami", "Emilia", "Bongo Cat", "Aqua", "Violet Evergarden", "Albedo", "Akame", "Shinobu Kochou", "Levi", "Himiko Toga", "Kaguya Shinomiya", "Ram", "Miku Nakano", "Rin Tohsaka", "Shiro", "Kanna Kamui", "Akeno Himejima", "Ai Hayasaka", "Hinata Hyuuga", "Raphtalia", "Kurumi Tokisaki", "Rikka Takanashi", "Satoru Gojou", "Esdeath", "Sinon", "Nami", "Darkness", "Neferpitou", "Shoto Todoroki", "Nino Nakano", "Killua Zoldyck", "Tohru", "Ochako Uraraka", "Chizuru Ichinose", "Katsuki Bakugou", "Erza Scarlet", "Nyan Cat", "Kurisu Makise", "Taiga Aisaka", "Ryuuko Matoi", "Asuka Langley Soryu", "Eren Jaeger", "C.C.", "Truck-kun", "Shouko Nishimiya", "Annie Leonhart", "Momo Yaoyorozu", "Osamu Dazai", "Kaori Miyazono", "Sasha Braus", "Mitsuri Kanroji", "Gawr Gura", "Kanao Tsuyuri", "Yuno Gasai", "Mary Saotome", "Nico Robin", "Tsuyu Asui", "Hestia", "Touka Kirishima", "Shinobu Oshino", "Lucy Heartfilia", "Tanjirou Kamado", "Krista Lenz", "Alice Synthesis Thirty", "Izuku Midoriya", "Erina Nakiri", "Rei Ayanami", "Yukino Yukinoshita", "Giyuu Tomioka", "Mitsuha Miyamizu", "Jibril", "Echidna", "Bowsette", "Dabi", "Ichigo", "Lucoa", "Ken Kaneki", "Tobio Kageyama", "Crona", "Nao Tomori", "Kenma Kozume", "Hitagi Senjougahara", "Itsuki Nakano", "Tooru Oikawa", "Tatsumaki", "Armin Arlert", "Eri", "Nejire Hadou", "Tanya Degurechaff", "Boa Hancock", "Shouyou Hinata", "Mashiro Shiina", "Tsunade", "Tamaki Kotatsu", "Rio Futaba", "Yotsuba Nakano", "Komi Shouko", "Kurapika", "Kyouka Jirou", "Midnight", "Zenitsu Agatsuma", "Nanika", "Naruto Uzumaki", "Emma", "Monkey D. Luffy", "Hanako-kun", "Kakashi Hatake", "Mina Ashido", "L", "Alice Nakiri", "Inugami Korone", "Mirko", "Usagi Tsukino", "Booette", "Sakura Haruno", "Itachi Uchiha", "Schwi Dola", "Sumi Sakurasawa", "Senko", "Hisoka", "Kirari Momobami", "Eijirou Kirishima", "Elizabeth Liones", "Aiz Wallenstein", "DIO", "Hawks", "Nagatoro-san", "Sasuke Uchiha", "Doge", "Mirai Kuriyama", "Orochimaru", "Eru Chitanda", "Nobara Kugisakic", "Misa Amane", "Chitoge Kirisaki", "Inosuke Hashibira", "Ruka Sarashina", "Jolyne Cujoh", "Fubuki", "Grell Sutcliff", "Mt. Lady", "Mine", "Hana Uzaki", "Gon Freecss", "Kanae Kochou", "Ririka Momobami", "Yui Hirasawa", "Wiz", "Yuu Nishinoya", "Kyouko Hori", "Roronoa Zoro", "Ymir", "Tetsurou Kuroo", "Alluka Zoldyck", "Ichika Nakano", "Jotaro Kujo", "Yunyun", "Yato", "Yuuji Itadori", "Kaede Azusagawa", "Koneko Toujou", "Yui Yuigahama", "Koutarou Bokuto", "Sagiri Izumi", "Shinoa Hiiragi", "Maki Oze", "Noelle Silva", "Mio Akiyama", "Godzilla", "Kei Tsukishima", "Yoko Littner", "Diane", "Pieck Finger", "Denki Kaminari", "Megumi Fushiguro", "Yuuki Konno", "Nene Yashiro", "Black Hanekawa", "Runa Yomozuki", "Juvia Lockser", "Shouta Aizawa", "Leafa", "Miia", "Mei Misaki", "Oprah", "Beyoncé", "Muhammad Ali", "Princess Diana", "Tom Cruise", "Madonna", "David Bowie", "Rihanna", "John Lennon", "Jesus Christ", "Marilyn Monroe", "George Clooney", "Cher", "Brad Pitt", "Leonardo DiCaprio", "Jack Nicholson", "Prince", "Arnold Schwarzenegger", "Lady Gaga", "Elizabeth Taylor", "Jennifer Lopez", "Joan of Arc", "Michael Jordan", "Bruce Lee", "Ariana Grande", "Will Smith", "Napoleon Bonaparte", "Aretha Franklin", "Kanye West", "Elvis", "Paul Newman", "Drake", "Tom Hanks", "Nicolas Cage", "Michelle Obama", "James Dean", "David Beckham", "Meryl Streep", "Jane Fonda", "Frederick Douglass", "Shaquille O’Neal", "Michael J. Fox", "Mariah Carey", "Dwayne Johnson", "Diplo", "Sophie Turner", "Joan Didion", "Cara Delevingne", "Guy Fieri", "Jamie Foxx"]
                const indexrandomcharactersname = Math.floor(Math.random() * randomcharactersname.length)
                taggeduser = randomcharactersname[indexrandomcharactersname]              

        } else {

                const userfullname =["Elon Musk", "Lionel Messi","Sylvester Stallone", "PewDiePie" ,"Barack Obama", "Drake", "Shaquille O'Neal", "John Cena", "Leonardo DiCapiro", "Usain Bolt", "Pelé", "Morgan Freeman", "Katy Perry", "Tom Hanks", "Taylor Swift", "Freddie Mercury", "Albert Einstein", "Jay-Z", "Eminem", "Donald Trump", "Jackie Chan", "Princess Diana", "Tom Cruise", "Muhammad Ali", "Madonna", "Rihanna", "Jesus Christ", "Arnold Schwarzenegger", "Michael Jordan", "Bruce Lee", "Will Smith", "Kanye West", "Elvis Presley", "Beyonce", "Oprah" ,"Michael Jackson", "Batman", "Superman", "Naruto", "Luffy", "Levi", "Itachi Uchiha", "Zoro", "Cristiano Ronaldo","Stephen Hawking", "The Undertaker", "Robert Downey Jr", "Justin Bieber"]
                const indexfullname = Math.floor(Math.random() * userfullname.length);
                taggeduser = userfullname[indexfullname];
                
            }
        
        
        
        
        
        
        
        
        
            switch(note[0]){

            case 'tch':

                st = 'tch';
                doing = [`is annoyed by ${taggeduser}`,`is displeased by ${taggeduser}`];
                asinglehuman = ["is getting mad"];
                limit = 4;
                break;

            case "?anime":

                animecharactersname = ["Lelouch Lamperouge anime", "Monkey D. Luffy anime", "L Lawliet  anime", "Levi anime", "Light Yagami  anime", "Roronoa Zoro anime", "Naruto Uzumaki  anime", "Edward Elric  anime", "Killua Zoldyck  anime", "Rintarou Okabe anime", "Kurisu Makis anime", "Itachi Uchiha  anime", "Rem anime", "Gintoki Sakata  anime", "Hachiman Hikigaya anime", "Eren Yeager  anime", "Mikasa Ackerman  anime", "Emilia anime", "Guts anime", "Saitama anime", "Kazuto Kirigaya  anime", "Todoroki Shouto anime", "Kakashi Hatake anime", "Kaneki Ken anime", "Spike Spiegel anime", "Sanji anime", "Son Gokuu anime", "Nico Robin anime", "Yato anime", "Fujiwara Chika anime", "Taiga Aisaka  anime", "Hisoka anime", "Asuna Yuuki  anime", "Sasuke Uchiha anime", "Megumin anime", "Hitagi Senjougahara anime", "Zero Two anime", "Ichigo anime", "Tanjirou Kamado anime", "Shinomiya Kaguya anime", "Roy Mustang  anime", "Joestar Joseph anime", "Saber anime", "Kamina anime", "Yuno Gasai  anime", "Shinobu Oshino anime", "Yukino Yukinoshita anime", "Gojou Satoru anime", "Yuu Ishigami  anime", "Mai Sakurajima anime", "Kurosaki  anime", "Osamu Dazai  anime", "Onizuka Eikichi anime", "Izuku Midoriya  anime", "Alucard anime", "Nezuko anime", "Koyomi Araragi anime", "Holo anime", "Zenitsu Agatsuma  anime", "Kurumi Tokisaki anime", "​Zero Two anime", "Rem anime", "Megumin anime", "Mai Sakurajima anime", "Nezuko Kamado anime", "Mikasa Ackerman anime", "Asuna anime", "Rias Gremory anime", "Hange Zoë anime", "Chika Fujiwara anime", "Yumeko Jabami anime", "Emilia anime", "Bongo Cat anime", "Aqua anime", "Violet Evergarden anime", "Albedo anime", "Akame anime", "Shinobu Kochou anime", "Levi anime", "Himiko Toga anime", "Kaguya Shinomiya anime", "Ram anime", "Miku Nakano anime", "Rin Tohsaka anime", "Shiro anime", "Kanna Kamui anime", "Akeno Himejima anime", "Ai Hayasaka anime", "Hinata Hyuuga anime", "Raphtalia anime", "Kurumi Tokisaki anime", "Rikka Takanashi anime", "Satoru Gojou anime", "Esdeath anime", "Sinon anime", "Nami anime", "Darkness anime", "Neferpitou anime", "Shoto Todoroki anime", "Nino Nakano anime", "Killua Zoldyck anime", "Tohru anime", "Ochako Uraraka anime", "Chizuru Ichinose anime", "Katsuki Bakugou anime", "Erza Scarlet anime", "Nyan Cat anime", "Kurisu Makise anime", "Taiga Aisaka anime", "Ryuuko Matoi anime", "Asuka Langley Soryu anime", "Eren Jaeger anime", "C.C. anime", "Truck-kun anime", "Shouko Nishimiya anime", "Annie Leonhart anime", "Momo Yaoyorozu anime", "Osamu Dazai anime", "Kaori Miyazono anime", "Sasha Braus anime", "Mitsuri Kanroji anime", "Gawr Gura anime", "Kanao Tsuyuri anime", "Yuno Gasai anime", "Mary Saotome anime", "Nico Robin anime", "Tsuyu Asui anime", "Hestia anime", "Touka Kirishima anime", "Shinobu Oshino anime", "Lucy Heartfilia anime", "Tanjirou Kamado anime", "Krista Lenz anime", "Alice Synthesis Thirty anime", "Izuku Midoriya anime", "Erina Nakiri anime", "Rei Ayanami anime", "Yukino Yukinoshita anime", "Giyuu Tomioka anime", "Mitsuha Miyamizu anime", "Jibril anime", "Echidna anime", "Bowsette anime", "Dabi anime", "Ichigo anime", "Lucoa anime", "Ken Kaneki anime", "Tobio Kageyama anime", "Crona anime", "Nao Tomori anime", "Kenma Kozume anime", "Hitagi Senjougahara anime", "Itsuki Nakano anime", "Tooru Oikawa anime", "Tatsumaki anime", "Armin Arlert anime", "Eri anime", "Nejire Hadou anime", "Tanya Degurechaff anime", "Boa Hancock anime", "Shouyou Hinata anime", "Mashiro Shiina anime", "Tsunade anime", "Tamaki Kotatsu anime", "Rio Futaba anime", "Yotsuba Nakano anime", "Komi Shouko anime", "Kurapika anime", "Kyouka Jirou anime", "Midnight anime", "Zenitsu Agatsuma anime", "Nanika anime", "Naruto Uzumaki anime", "Emma anime", "Monkey D. Luffy anime", "Hanako-kun anime", "Kakashi Hatake anime", "Mina Ashido anime", "L anime", "Alice Nakiri anime", "Inugami Korone anime", "Mirko anime", "Usagi Tsukino anime", "Booette anime", "Sakura Haruno anime", "Itachi Uchiha anime", "Schwi Dola anime", "Sumi Sakurasawa anime", "Senko anime", "Hisoka anime", "Kirari Momobami anime", "Eijirou Kirishima anime", "Elizabeth Liones anime", "Aiz Wallenstein anime", "DIO anime", "Hawks anime", "Nagatoro-san anime", "Sasuke Uchiha anime", "Doge anime", "Mirai Kuriyama anime", "Orochimaru anime", "Eru Chitanda anime", "Nobara Kugisakic anime", "Misa Amane anime", "Chitoge Kirisaki anime", "Inosuke Hashibira anime", "Ruka Sarashina anime", "Jolyne Cujoh anime", "Fubuki anime", "Grell Sutcliff anime", "Mt. Lady anime", "Mine anime", "Hana Uzaki anime", "Gon Freecss anime", "Kanae Kochou anime", "Ririka Momobami anime", "Yui Hirasawa anime", "Wiz anime", "Yuu Nishinoya anime", "Kyouko Hori anime", "Roronoa Zoro anime", "Ymir anime", "Tetsurou Kuroo anime", "Alluka Zoldyck anime", "Ichika Nakano anime", "Jotaro Kujo anime", "Yunyun anime", "Yato anime", "Yuuji Itadori anime", "Kaede Azusagawa anime", "Koneko Toujou anime", "Yui Yuigahama anime", "Koutarou Bokuto anime", "Sagiri Izumi anime", "Shinoa Hiiragi anime", "Maki Oze anime", "Noelle Silva anime", "Mio Akiyama anime", "Godzilla anime", "Kei Tsukishima anime", "Yoko Littner anime", "Diane anime", "Pieck Finger anime", "Denki Kaminari anime", "Megumi Fushiguro anime", "Yuuki Konno anime", "Nene Yashiro anime", "Black Hanekawa anime", "Runa Yomozuki anime", "Juvia Lockser anime", "Shouta Aizawa anime", "Leafa anime", "Miia anime", "Mei Misaki anime"]
                const indexanimecharactersname = Math.floor(Math.random() * animecharactersname.length);
                taggedusername = animecharactersname[indexanimecharactersname];
                forasinglehumantaggeduser = taggedusername.slice(0,-6);
                st = taggedusername ;
                doing = [`is thinking about ${forasinglehumantaggeduser} and ${taggeduser}`];
                asinglehuman = [`is thinking about ${forasinglehumantaggeduser}`]; 
                limit = 5;
        
            default:
                
                randomsearchterm = ["Elon Musk", "Lionel Messi","Sylvester Stallone", "PewDiePie" ,"Barack Obama", "Drake", "Shaquille O'Neal", "John Cena", "Leonardo DiCapiro", "Usain Bolt", "Pelé", "Morgan Freeman", "Katy Perry", "Tom Hanks", "Taylor Swift", "Freddie Mercury", "Albert Einstein", "Jay-Z", "Eminem", "Donald Trump", "Jackie Chan", "Princess Diana", "Tom Cruise", "Muhammad Ali", "Madonna", "Rihanna", "Jesus Christ", "Arnold Schwarzenegger", "Michael Jordan", "Bruce Lee", "Will Smith", "Kanye West", "Elvis Presley", "Beyonce", "Oprah" ,"Michael Jackson", "Batman", "Superman", "Naruto", "Luffy", "Levi", "Itachi Uchiha", "Zoro", "Cristiano Ronaldo","Stephen Hawking", "The Undertaker", "Robert Downey Jr", "Justin Bieber", "Lelouch Lamperouge", "Monkey D. Luffy", "L Lawliet", "Levi", "Light Yagami", "Roronoa Zoro", "Naruto Uzumaki", "Edward Elric", "Killua Zoldyck", "Rintarou Okabe", "Kurisu Makis", "Itachi Uchiha", "Rem", "Gintoki Sakata", "Hachiman Hikigaya", "Eren Yeager", "Mikasa Ackerman", "Emilia", "Guts", "Saitama", "Kazuto Kirigaya", "Todoroki Shouto", "Kakashi Hatake", "Kaneki Ken", "Spike Spiegel", "Sanji", "Son Gokuu", "Nico Robin", "Yato", "Fujiwara Chika", "Taiga Aisaka", "Hisoka", "Asuna Yuuki", "Sasuke Uchiha", "Megumin", "Hitagi Senjougahara", "Zero Two", "Ichigo", "Tanjirou Kamado", "Shinomiya Kaguya", "Roy Mustang", "Joestar Joseph", "Saber", "Kamina", "Yuno Gasai", "Shinobu Oshino", "Yukino Yukinoshita", "Gojou Satoru", "Yuu Ishigami", "Mai Sakurajima", "Kurosaki", "Osamu Dazai", "Onizuka Eikichi", "Izuku Midoriya", "Alucard", "Nezuko", "Koyomi Araragi", "Holo Anime", "Zenitsu Agatsuma", "Kurumi Tokisaki", "​Zero Two", "Rem", "Megumin", "Mai Sakurajima", "Nezuko Kamado", "Mikasa Ackerman", "Asuna", "Rias Gremory", "Hange Zoë", "Chika Fujiwara", "Yumeko Jabami", "Emilia", "Bongo Cat", "Aqua", "Violet Evergarden", "Albedo", "Akame", "Shinobu Kochou", "Levi", "Himiko Toga", "Kaguya Shinomiya", "Ram", "Miku Nakano", "Rin Tohsaka", "Shiro", "Kanna Kamui", "Akeno Himejima", "Ai Hayasaka", "Hinata Hyuuga", "Raphtalia", "Kurumi Tokisaki", "Rikka Takanashi", "Satoru Gojou", "Esdeath", "Sinon", "Nami", "Darkness", "Neferpitou", "Shoto Todoroki", "Nino Nakano", "Killua Zoldyck", "Tohru", "Ochako Uraraka", "Chizuru Ichinose", "Katsuki Bakugou", "Erza Scarlet", "Nyan Cat", "Kurisu Makise", "Taiga Aisaka", "Ryuuko Matoi", "Asuka Langley Soryu", "Eren Jaeger", "C.C.", "Truck-kun", "Shouko Nishimiya", "Annie Leonhart", "Momo Yaoyorozu", "Osamu Dazai", "Kaori Miyazono", "Sasha Braus", "Mitsuri Kanroji", "Gawr Gura", "Kanao Tsuyuri", "Yuno Gasai", "Mary Saotome", "Nico Robin", "Tsuyu Asui", "Hestia", "Touka Kirishima", "Shinobu Oshino", "Lucy Heartfilia", "Tanjirou Kamado", "Krista Lenz", "Alice Synthesis Thirty", "Izuku Midoriya", "Erina Nakiri", "Rei Ayanami", "Yukino Yukinoshita", "Giyuu Tomioka", "Mitsuha Miyamizu", "Jibril", "Echidna", "Bowsette", "Dabi", "Ichigo", "Lucoa", "Ken Kaneki", "Tobio Kageyama", "Crona", "Nao Tomori", "Kenma Kozume", "Hitagi Senjougahara", "Itsuki Nakano", "Tooru Oikawa", "Tatsumaki", "Armin Arlert", "Eri", "Nejire Hadou", "Tanya Degurechaff", "Boa Hancock", "Shouyou Hinata", "Mashiro Shiina", "Tsunade", "Tamaki Kotatsu", "Rio Futaba", "Yotsuba Nakano", "Komi Shouko", "Kurapika", "Kyouka Jirou", "Midnight", "Zenitsu Agatsuma", "Nanika", "Naruto Uzumaki", "Emma", "Monkey D. Luffy", "Hanako-kun", "Kakashi Hatake", "Mina Ashido", "L", "Alice Nakiri", "Inugami Korone", "Mirko", "Usagi Tsukino", "Booette", "Sakura Haruno", "Itachi Uchiha", "Schwi Dola", "Sumi Sakurasawa", "Senko", "Hisoka", "Kirari Momobami", "Eijirou Kirishima", "Elizabeth Liones", "Aiz Wallenstein", "DIO", "Hawks", "Nagatoro-san", "Sasuke Uchiha", "Doge", "Mirai Kuriyama", "Orochimaru", "Eru Chitanda", "Nobara Kugisakic", "Misa Amane", "Chitoge Kirisaki", "Inosuke Hashibira", "Ruka Sarashina", "Jolyne Cujoh", "Fubuki", "Grell Sutcliff", "Mt. Lady", "Mine", "Hana Uzaki", "Gon Freecss", "Kanae Kochou", "Ririka Momobami", "Yui Hirasawa", "Wiz", "Yuu Nishinoya", "Kyouko Hori", "Roronoa Zoro", "Ymir", "Tetsurou Kuroo", "Alluka Zoldyck", "Ichika Nakano", "Jotaro Kujo", "Yunyun", "Yato", "Yuuji Itadori", "Kaede Azusagawa", "Koneko Toujou", "Yui Yuigahama", "Koutarou Bokuto", "Sagiri Izumi", "Shinoa Hiiragi", "Maki Oze", "Noelle Silva", "Mio Akiyama", "Godzilla", "Kei Tsukishima", "Yoko Littner", "Diane", "Pieck Finger", "Denki Kaminari", "Megumi Fushiguro", "Yuuki Konno", "Nene Yashiro", "Black Hanekawa", "Runa Yomozuki", "Juvia Lockser", "Shouta Aizawa", "Leafa", "Miia", "Mei Misaki", "Oprah", "Beyoncé", "Muhammad Ali", "Princess Diana", "Tom Cruise", "Madonna", "David Bowie", "Rihanna", "John Lennon", "Jesus Christ", "Marilyn Monroe", "George Clooney", "Cher", "Brad Pitt", "Leonardo DiCaprio", "Jack Nicholson", "Prince", "Arnold Schwarzenegger", "Lady Gaga", "Elizabeth Taylor", "Jennifer Lopez", "Joan of Arc", "Michael Jordan", "Bruce Lee", "Ariana Grande", "Will Smith", "Napoleon Bonaparte", "Aretha Franklin", "Kanye West", "Elvis", "Paul Newman", "Drake", "Tom Hanks", "Nicolas Cage", "Michelle Obama", "James Dean", "David Beckham", "Meryl Streep", "Jane Fonda", "Frederick Douglass", "Shaquille O’Neal", "Michael J. Fox", "Mariah Carey", "Dwayne Johnson", "Diplo", "Sophie Turner", "Joan Didion", "Cara Delevingne", "Guy Fieri", "Jamie Foxx"]
                search = ["anime nope","anime no"]
                stno = Math.floor(Math.random()*randomsearchterm.length);
                st = randomsearchterm[stno]
                doing=[`is doing his ${st} thing with ${taggeduser}`]
                asinglehuman =[`is doing his ${st} thing`]
                limit = 5;

        
        }
        
        
        
        
        
        
        
        
        
        if(taggedsomeoneornot === "no"){

                singlehumanindexno = Math.floor(Math.random()*asinglehuman.length); 
                let url = `https://g.tenor.com/v1/search?q=${st}&key=${process.env.tenorkey}&limit=${limit}`;
                let response = await fetch(url);
                let json = await response.json();
                const index = Math.floor(Math.random() * json.results.length);
            
                const newEmbed = await new Discord.MessageEmbed()
                
                    .setDescription(`**${message.member.displayName}** ${asinglehuman[singlehumanindexno]}${beauseof}`)
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
                
                    .setDescription(`**${message.member.displayName}** ${doing[taggedhumanindexno]}${beauseof}`)
                    .setTitle('Roleplay')
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
