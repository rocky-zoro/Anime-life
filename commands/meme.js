const {MessageAttachment} = require('discord.js');
const image = require('canvas');
const path = require('path');



module.exports = {

    name:'image',
    aliases:['i'],
    description:'image',
    async execute(client, message, args, Discord){
        
        let text = args.slice(2,100).join(" ");
        //! ------------------------------------------------------------------------
        //? Fuctions used
        
        function inputText (context, text, x, y, width, heightchange) {
            let words = text.split(' ');
            let line = '';

            for (let i=0; i<words.length; i++){
                let testline = line + words[i] + " ";
                let measure = context.measureText(testline).width;

                if(measure > width && i>0){
                    context.fillText(line , x,y);
                    line = words[i] + ' ';
                    y = y + heightchange;
                } else {
                    line = testline;
                }
                
            context.fillText(line, x, y);
            }
        }
        
        //? -------------------------------------------------------------------

        //& Commands name
        // burl = background-url, w = width, h = height, x = xcordinate, y = ycordinate, cw = canvas width background, ch = canvas height background, f = font type, fc = font color, 
        
        let  canvas, context, background;
        let cw = 700, ch =700;
        let f = 'bold 30px sans-serif' ,fc = "#000000", w = 90, h = 90, x = 550, y = 170 ;
        let text_exist = "yes", image_exist = "yes";
        let text_w, text_h, text_x, text_y;
        let text_w1, text_h1, text_x1, text_y1;
        let text_w2, text_h2, text_x2, text_y2;
        let text_w3, text_h3, text_x3, text_y3;
        let x1, y1, w1 ,h1;

        let multi_texts = "1";
        let multi_images = "1";

        if (args[0] === "birth"){

        text_exist ="no"
        image_exist = "yes"
        burl = './image/1.jpg'            
        w = 120;
        h = 120;
        x = 530;
        y = 350;
        cw = 700;
        ch = 700;
        f = 'bold 30px sans-serif';
        fc = "#22073a";
        
        } else if ( args[0] === "cancer"){
        
            text_exist = "no";
            image_exist = "yes";
            burl = './image/3.jpg';
            w = 100;
            h = 100;
            x = 400;
            y = 100;
            cw = 700;
            ch = 400;
        
        } else if(args[0] === "end"){
            
            text_exist  = "yes";
            image_exist = "no";
            burl = './image/4.jpg';
            f = '900 37px sans-serif';
            fc = "#000000";
            cw = 500;
            ch = 600;
            text_x = 330; 
            text_y = 80;
            text_w = 70;
            text_h = 42;

        } else if (args[0] === "retarded") {
            
            text_exist = "yes";
            image_exist = "no";
            burl = './image/2.jpg';
            f = '900 37px sans-sherif'
            fc = "#000000"
            cw = 640;
            ch =640;
            text_x = 340; 
            text_y = 80;
            text_w = 250;
            text_h = 42;
        
        } else if (args[0] === "really") {
            
            text_exist = "yes";
            image_exist = "no";
            burl = './image/5.jpg';
            f = '900 20px sans-sherif'
            fc = "#000000"
            cw = 750;
            ch = 600;
            text_x = 500; 
            text_y = 100;
            text_w = 150;
            text_h = 42;
        } else if (args[0] === "brain") {
 
            text_exist = "yes";
            image_exist = "no";
            multi_texts = "4";
            burl = './image/6.jpg';
            f = 'bold 40px sans-sherif'
            fc = "#000000"
            cw = 850;
            ch = 1200;
            text_x = 20; 
            text_y = 40;
            text_w = 400;
            text_h = 50;
            
            text_x1 = 20; 
            text_y1 = 340;
            text_w1 = 400;
            text_h1 = 20;

            
            text_x2 = 20; 
            text_y2 = 650;
            text_w2 = 400;
            text_h2 = 20;

            
            text_x3 = 20; 
            text_y3 = 920;
            text_w3 = 400;
            text_h3 = 20;


        }else if (args[0] === "name"){
            
            text_exist = "yes";
            image_exist = "no";
            burl = './image/7.jpg';
            f = '35px sans-sherif'
            fc = "#000000"
            cw = 500;
            ch = 530;
            text_x = 185; 
            text_y = 165;
            text_w = 250;
            text_h = 42;
        
        } else if (args[0] === "beautiful") {
            
            text_exist = "no";
            image_exist = "yes";
            multi_images = "2"
            burl = './image/8.jpg';

            w = 133;
            h = 154;
            x = 394;
            y = 36;
            
            w1 = 134;
            h1 = 158;
            x1 = 396;
            y1 = 341;
            


            cw = 576;
            ch = 606;
        } else if(args[0] === "crying") {
            text_exist = "yes";
            image_exist = "no";
            burl = './image/9.jpg';
            f = '35px sans-sherif'
            fc = "#ffffff"
            cw = 500;
            ch = 572;
            text_x = 30; 
            text_y = 54;
            text_w = 450;
            text_h = 42;
        
        } else if (args[0] === "lisa"){
            text_exist = "yes";
            image_exist = "no";
            burl = './image/10.jpg';
            f = '35px sans-sherif'
            fc = "#000000"
            cw = 640;
            ch = 480;
            text_x = 140; 
            text_y = 119;
            text_w = 400;
            text_h = 42;
    
        }

        
        else {
        
            message.channel.send("Please use a valid command");
            return ;

        }

        //? ---------------------------------------------------------------------------
        let url, dname;

        //? Remember to change the args to 1 
        //& Tagged User code


        if (!args[1] || args[1]==="no-one" || args[1] === "me") {

            url = message.member.user.displayAvatarURL({format: 'jpg'});
            dname = message.member.displayName;            
        
        } else if (args[1].startsWith('<@') && args[1].endsWith('>')) {
        
            let mention = args[1].slice(2,-1)
            if (mention.startsWith('!')) {
    
                mention = mention.slice(1);
            
            }
            const infotaggeduser= await message.guild.members.fetch(mention);

            dname = infotaggeduser.displayName;
            url = infotaggeduser.user.avatarURL({format: 'jpg'},{dynamic:true});
        
        } else if (args[1].match(/^[0-9]+$/) && args[1].length >16 && args[1].length <20) {
            
            const infotaggeduser = await message.guild.members.fetch(args[1]);

            url = infotaggeduser.user.avatarURL({format: 'jpg'},{dynamic:true});
            
            dname = infotaggeduser.displayName;


        } else {

            url = message.member.user.displayAvatarURL({format: 'jpg'});
            dname = args[1];
        }

        let use_text = `${dname} ${text}`;
        let multi_text = use_text.split('&');

        //! ----------------------------------------------------------------------------------------------------------
        //? Types of cases
        
        if(text_exist === "yes" && image_exist === "yes"){
        
            background = await image.loadImage(path.join(__dirname,burl))
    
            canvas =  image.createCanvas(cw, ch)
            context = canvas.getContext('2d');
            context.drawImage(background, 0, 0, canvas.width, canvas.height);
        
            const avatar = await image.loadImage(url);
            context.drawImage(avatar, x, y, w, h);
    
            context.font = f;
            context.fillStyle = fc;
            context.fillText(dname, 550, 295, 100);
    
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), '1.png');
            message.channel.send(attachment)
            
        } 
        
        // works perfectly
        else if (text_exist === "no" && image_exist === "yes"){
            
            
            background = await image.loadImage(path.join(__dirname,burl))
    
            canvas =  image.createCanvas(cw, ch)
            context = canvas.getContext('2d');
            context.drawImage(background, 0, 0, canvas.width, canvas.height);
            if(multi_images === "1"){
                const avatar = await image.loadImage(url);
                context.drawImage(avatar, x, y, w, h);
            } else if (multi_images === "2"){
                
                const avatar = await image.loadImage(url);
                context.drawImage(avatar, x, y, w, h);
                context.drawImage(avatar, x1, y1, w1, h1);
            }
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), '1.png');
            message.channel.send(attachment)
            
        } 
        // double text problem
        else if (text_exist === "yes" && image_exist === "no"){
    
            background = await image.loadImage(path.join(__dirname,burl))
    
            canvas =  image.createCanvas(cw, ch)
            context = canvas.getContext('2d');
            context.drawImage(background, 0, 0, canvas.width, canvas.height);
    
            context.font = f;
            context.fillStyle = fc;
            if(multi_texts === "1"){
            inputText(context, use_text, text_x, text_y, text_w, text_h)
            }
            else if (multi_texts === "4"){
                
            inputtext(context, multi_text[0], text_x, text_y, text_w, text_h)
            
            inputtext(context, multi_text[1], text_x1, text_y1, text_w1, text_h1)
            
            inputtext(context, multi_text[2], text_x2, text_y2, text_w2, text_h2)
    
            inputtext(context, multi_text[3], text_x3, text_y3, text_w3, text_h3)
    
            }
            
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), '1.png');
            message.channel.send(attachment)
        }
        
        else{
 
            background = await image.loadImage(path.join(__dirname,burl))
 
            canvas =  imaage.createCanvas(cw, ch);
            context = canvas.getContext('2d');    
            context.drawImage(background, 0, 0, canvas.width, canvas.height)
            
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), '1.png');
            message.channel.send(attachment)
        
        }



    }

}