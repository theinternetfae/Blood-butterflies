let shy = 0;
let confident = 0;
let mean = 0;

const buttonBox = document.getElementById("moves");
const shyText = document.getElementById("shyText");
const confidentText = document.getElementById("confidentText");
const meanText = document.getElementById("meanText");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const displayText = document.getElementById("text");

button1.onclick = confidentKing;
button2.onclick = devilShy;
button3.onclick = sweetMean;

function update(path) {
    displayText.innerText = path.text;
    button1.innerText = path["button text"][0];
    button2.innerText = path["button text"][1];
    button3.innerText = path["button text"][2];
    button1.onclick = path["button functions"][0];
    button2.onclick = path["button functions"][1];
    button3.onclick = path["button functions"][2];
}

let kingCount = 0;
let devilCount = 0;
let sweetCount = 0;


function confidentKing() {
    while (kingCount < 8) {
        if (kingCount === 0) {
            update(paths[0]);
            confident += 5;
            confidentText.innerText = confident;
        } 

        else if (kingCount === 1) {
            update(paths[3]);
            confident += 5;
            confidentText.innerText = confident;
            if (confident < 10 && shy === 5) {
                update(paths[4]);
            } else if (confident < 10 && mean === 5) {
                update(paths[5]);
            }
        }

        else if (kingCount === 2) {
            confident += 5;
            confidentText.innerText = confident;
            if (confident > shy && confident > mean) {
                update(paths[12])
            } else if (shy > confident && shy > mean) {
                update(paths[13]);
            } else if (mean > confident && mean > shy) {
                update(paths[14]);
            } else {
                update(paths[12]);
            }
        }

        else if (kingCount === 3) {
            update(paths[21]);
            confident += 5;
            confidentText.innerText = confident;

            if (shy >= confident) {
                update(paths[22]);
            } else if (mean >= confident ) {
                update(paths[23]);
            } else {
                update(paths[21]);
            }

            if (mean <= 15) {
                button3.disabled = true;
                button3.style.background = "grey"
                button3.style.textDecoration = "line-through"
            }
        }

        kingCount++;
        devilCount++;
        sweetCount++;
        break;
    }    
}

function devilShy() {
    while (devilCount < 8) {
        if (devilCount === 0) {
            update(paths[1]);
            shy += 5;
            shyText.innerText = shy;
        }

        else if (devilCount === 1) {
            update(paths[7]);
            shy += 5;
            shyText.innerText = shy;
            if (shy < 10 && confident === 5) {
                update(paths[6]);
            } else if (shy < 10 && mean === 5) {
                update(paths[8]);
            }
        }

        else if (devilCount === 2) {
            shy += 5;
            shyText.innerText = shy;
            if (shy > confident && shy > mean) {
                update(paths[16])
            } else if (confident > shy && confident > mean) {
                update(paths[15]);
            } else if (mean > confident && mean > shy) {
                update(paths[17]);
            } else {
                update(paths[16]);
            }
        }

        kingCount++;
        devilCount++;
        sweetCount++;
        break;
    }   
}

function sweetMean() {
    while (sweetCount < 8) {
        if (sweetCount === 0) {
            update(paths[2]);
            mean += 5;
            meanText.innerText = mean;
        }

        else if (sweetCount === 1) {
            update(paths[11]);
            mean += 5;
            meanText.innerText = mean;
            if (mean < 10 && shy === 5) {
                update(paths[10]);
            } else if (mean < 10 && confident === 5) {
                update(paths[9]);
            }
        }

        else if (sweetCount === 2) {
            mean += 5;
            meanText.innerText = mean;
            if (mean > confident && mean > shy) {
                update(paths[20]);
                button1.disabled = true;
                button1.style.background = "grey"
                button1.style.textDecoration = "line-through";
            } else if (confident > shy && confident > mean) {
                update(paths[18]);
            } else if (shy > confident && shy > mean) {
                update(paths[19]);
            } else {
                update(paths[20]);
                button1.disabled = true;
                button1.style.background = "grey"
                button1.style.textDecoration = "line-through";
            }
        }

        kingCount++;
        devilCount++;
        sweetCount++;
        break;
    }   
}


const paths = [
//CASE 0
    {
        number: 0,
        name: "Excited (KingBee)",
        "button text": ["I'm Tamara, nice to meet you", "Hello...", "Good to know"],
        "button functions": [confidentKing, devilShy, sweetMean],
        text: "You're going to rule this school! You feel it in your bones. Happily, you saunter into the school. You get to your first class and take your seat \n\n You can feel eyes on you from the girl in the next seat. You turn. \"Hi\" She smiles. \"I'm Aliyah\"."
    },
    {
        number: 1,
        name: "Anxious (shyDevil)",
        "button text": ["I'm Tamara, nice to meet you", "Hello...", "Good to know"],
        "button functions": [confidentKing, devilShy, sweetMean],
        text: "You hope the feeling will fade eventually, till then you decide you would prefer to lay low for now. You duck your head and hold on tightly to your backpack as you walk into the school. You get to your first class and take your seat. \n\n You can feel eyes on you from the girl in the next seat. You turn. \"Hi\" She smiles. \"I'm Aliyah\"."
    },
    {
        number: 2,
        name: "Whatever... (meanSweetHeart)",
        "button text": ["I'm Tamara, nice to meet you", "Hello...", "Good to know"],
        "button functions": [confidentKing, devilShy, sweetMean],
        text: "School ALWAYS sucks, no matter the reputation, it's hard to give a shit. You let out a deep exhale as you walk into the school. You get to your first class and take your seat. \n\n You can feel eyes on you from the girl in the next seat. You turn. \"Hi\" She smiles. \"I'm Aliyah\"."
    },





















//CASE 1
//BUTTON1 VARIANTS "HI, NICE TO MEET YOU."
    {
        //IF FOLLOW UP => 'EXCITED'
        number: 3,
        name: "Hi, nice to meet you (Confident)",
        "button text": ["Yeah!", "Um...", "No."],
        "button functions": [confidentKing, devilShy, sweetMean],
        text: "\"Nice to meet you too!\" She beams. \"Welcome to Moorim High.\" \n\n \"Thanks!\" Her enthusiasm was contagious. \"You're like the first person I've talked to today.\" \n\n  \"Glad to be of service.\" She joked. \n\n You laughed. Just then the teacher walked in. \n\n \"Wanna hang out after school?\""
    },
    {
        //IF FOLLOW UP => 'ANXIOUS'
        number: 4,
        name: "Hi, nice to meet you (Shy)",
        "button text": ["Yeah!", "Um...", "No."],
        "button functions": [confidentKing, devilShy, sweetMean],
        text: "\"Nice to meet you too!\" She beams. \"Welcome to Moorim High.\" \n\n You laugh a bit bashfully. \"Is it obvious that I'm new?\" \n\n \"Well apart from the fact that I've been going here for the past year without seeing you, I couldn't tell at all.\" She winked. \n\n You laughed. Just then the teacher walked in. \n\n \"Wanna hang out after school?\""
    },
    {
        //IF FOLLOW UP => 'WHATEVER...'
        number: 5,
        name: "Hi, nice to meet you (Mean)",
        "button text": ["Yeah!", "Um...", "No."],
        "button functions": [confidentKing, devilShy, sweetMean],
        text: "\"Nice to meet you too!\" She beams. \"Welcome to Moorim High.\" \n\n \"Thanks.\" You mutter. \n\n \"Why so upset?\" She asks. \n\n You sigh. \"I'm not upset, just bored out of my mind\" \n\n She laughs. \"Well, you just got here.\" Just then the teacher walks in. \"Wanna hang out after school?\""
    },

    
        //BUTTON2 VARIANTS "HELLO..."
        {
            //IF FOLLOW UP => 'EXCITED'
            number: 6,
            name: "Hello... (Confident)",
            "button text": ["Yeah!", "Um...", "No."],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "She giggles. \"Why so suspicious? I don't bite.\" \n\n You laugh. \"Sorry, first day Jitters.\" \n\n \"Happens to the best of us.\" She shrugs. \n\n \"I'm Tamara.\" You finally introduce yourself. \n\n \"Nice to meet you.\" She smiles. \"You know, it would help ease your nerves if you hung out with me after school, what do you think?\""
        },
        {
            //IF FOLLOW UP => 'ANXIOUS'
            number: 7,
            name: "Hello... (Shy)",
            "button text": ["Yeah!", "Um...", "No."],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "She giggles. \"Why so suspicious? I don't bite.\" \n\n You laugh. \"Sorry.\" \n\n \"It's cool. You're nervous, it's your first day. I remember my first day, I was a wreck, but that's also how I met my boyfriend so it's all good.\" She mused to herself. \n\n \"Oh.\" What a sweet story. \n\n \"So, what's your name?\" She asks. \n\n \"Tamara.\" You finally introduce yourself. \n\n \"Nice to meet you.\" She smiles. \"You know, it would help ease your nerves if you hung out with me after school, what do you think?\""
        },
        {
            //IF FOLLOW UP => 'WHATEVER...'
            number: 8,
            name: "Hello... (Mean)",
            "button text": ["Yeah!", "Um...", "No."],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "She giggles. \"Why so suspicious? I don't bite.\" \n\n \"I do.\" You both stare at each other for a bit then she starts laughing. You can't help but laugh a bit too. \n\n \"You know, It's smart that you're weary of people but you don't have to be weary with me.\" She leans back in her chair. \n\n You roll your eyes playfully. \"Sure... I'm Tamara\" You finally introduce yourself, she seemed alright. \n\n \"Nice to meet you.\" She smiles. \"You know, it would help ease your nerves if you hung out with me after school, what do you think?\""
        },


        //BUTTON3 VARIANTS "GOOD TO KNOW"
        {
            //IF FOLLOW UP => 'EXCITED'
            number: 9,
            name: "Good to know (Confident)",
            "button text": ["Yeah!", "Um...", "No."],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "You didn't exactly know why you were being mean to her but it was always safer to hurt first than be hurt. At this point it was a powerplay for you, nothing personal. \n\n \"Damn, ok, love the attitude.\" She laughed. \n\n You laugh too \"Thanks, I spent a lot of time perfecting it.\" \n\n You both laugh. \"I'm Tamara.\" You introduce yourself. \n\n \"Nice to meet you, Tamara. What a first impression.\" \n\n \"Thanks.\" You grin. \n\n \"My friends would love you. Would you like to hangout after school?\""
        },
        {
            //IF FOLLOW UP => 'ANXIOUS'
            number: 10,
            name: "Good to know (Shy)",
            "button text": ["Yeah!", "Um...", "No."],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "You nearly give yourself a physical forehead slap. You hadn't exactly thought that answer through. \n\n \"Damn, ok, love the attitude.\" She laughed. \n\n She laugh nervously. \"Sorry.\" \n\n \"No, no, that's good. You should be wary of strangers, not of me though but it's good practice.\" She jokes, making you laugh \"I'm Tamara.\" You introduce yourself. \n\n \"Nice to meet you, Tamara. What a first impression.\" \n\n You laugh nervously again. \n\n \"My friends would love you. Would you like to hangout after school?\""
        },
        {
            //IF FOLLOW UP => 'WHATEVER...'
            number: 11,
            name: "Good to know (Mean)",
            "button text": ["Yeah!", "Um...", "No."],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "You weren't looking for friends honestly. All your friends were in your old school. \n\n \"Damn, ok, love the attitude.\" She laughed. \n\n You ignore her. \n\n \"Come on, I know you're jittery because of your first day and all but you don't have to be this way\" She joked, still trying to get a reaction from you. \"How about we hang out after school it could help ease your nerves.\""
        },





    



//CASE 2
//BUTTON1 VARIANTS "YEAH"
    {
        //IF FOLLOW UP => 'Hi, nice to meet you'
        number: 12,
        name: "Yeah, sure (Confident)",
        "button text": ["Walk with Aliyah", "Walk Alone", "Take the long route"],
        "button functions": [confidentKing, devilShy, sweetMean],
        text: "After school Aliyah walked you the basketball court where three guys were playing ball in the empty court. \n\n \"My friends.\" She explained to you. She hollered at them as the both of you got closer, when they spotted her they hollered back. \n\n  \"Who's this?\" The one who'd been holding the ball threw it over to the person next to him. He was the tallest of all of them, dark with dreadlocs, an air of confidence and ease around him. You kind of found him attractive. \n\n \"I'm Tamara.\" You introduced yourself before Aliyah could do so. \n\n His smiled at you, looking you up and down. \"Dane.\" He reached out for your hand, you took it, both of you sharing a look till Aliyah cleared her throat. \n\n \"Well,\" She contiuned. \"This is Caleb, my boyfriend\" She pulled the blonde with green eyes to herself, he smiled and waved. \"And that's, Noah.\" She pointed at the third guy. He had a buzzcut and sharp eyes, he looked kind of mean. He turned to you and gave an acknowledging nod. \"Hey.\" He said curtly. \n\n \"Hey.\" You responded. Without saying another word he continued hooping. \n\n Aliyah turned to you. \"He's not very talkative.\" \n\n Dane scoffed. \"Unless you're his type that is. You're my type though.\" He looked at you. \n\n You giggled. This wasn't bad at all. \n\n They seemed like a good crew, you spent the rest of the afternoon with them talking and laughing. As the hours rolled by Caleb was the first to leave, he had to pick up his little brother. When he was gone Aliyah seemed bored. \n\n \"Wanna go home together?\" She asked."
    },
    {
        //IF FOLLOW UP => 'Hello...'
        number: 13,
        name: "Yeah, sure (Shy)",
        "button text": ["Walk with Aliyah", "Walk Alone", "Take the long route"],
        "button functions": [confidentKing, devilShy, sweetMean],
        text: "After school Aliyah walked you the basketball court where three guys were playing ball in the empty court. \n\n \"My friends.\" She assured you. She hollered at them as the both of you got closer, when they spotted her they hollered back. \n\n  \"Who's this?\" The one who'd been holding the ball threw it over to the person next to him. He was the tallest of all of them, dark with dreadlocs, an air of confidence and ease around him. \n\n \"She's Tamara.\" Aliyah introduced you. \n\n \"I'm Dane. Nice to meet you.\" \n\n \"Nice to meet you too.\" You managed a response. \n\n \"Well,\" She contiuned. \"This is Caleb, my boyfriend\" She pulled the blonde with green eyes to herself, he smiled and waved. \"And that's, Noah.\" She pointed at the third guy that was now walking over to them. \n\n \"Hi.\" He smiled at you. He had a buzzcut and sharp eyes, he looked kind of mean but his smile proved otherwise. \n\n \"Hi.\" You say back. This wasn't so bad after all. \n\n They seemed like a good crew, you spent the rest of the afternoon with them talking and laughing, they all helped you ease into the group. As the hours rolled by Caleb was the first to leave, he had to pick up his little brother. When he was gone Aliyah seemed bored. \n\n \"Wanna go home together?\" She asked."
    },
    {
        //IF FOLLOW UP => 'Good...'
        number: 14,
        name: "Yeah, sure (Mean)",
        "button text": ["Walk with Aliyah", "Walk Alone", "Take the long route"],
        "button functions": [confidentKing, devilShy, sweetMean],
        text: "After school Aliyah walked you the basketball court where three guys were playing ball in the empty court. \n\n \"My friends.\" She told you. She hollered at them as the both of you got closer, when they spotted her they hollered back. \n\n  \"Who's this?\" The one who'd been holding the ball threw it over to the person next to him. He was the tallest of all of them, dark with dreadlocs, an air of confidence and ease around him. \n\n \"She's Tamara.\" Aliyah introduced you. You'd eventually told her your name. \n\n \"I'm Dane. Nice to meet you.\" \n\n \"Same here.\" You responded passively. \n\n \"Well,\" She contiuned. \"This is Caleb, my boyfriend\" She pulled the blonde with green eyes to herself, he smiled and waved. \"And that's, Noah.\" She pointed at the third guy. He had a buzzcut and sharp eyes, he looked kind of mean. He turned to you and gave an acknowledging nod. \"Hey.\" He said curtly. \n\n \"Hey.\" You responded. Without saying another word he continued hooping. \n\n Aliyah turned to you. \"He's not very talkative but we could all get along.\" \n\n This was horrible, you had no idea why you agreed to it in the first place. They could tell you weren't feeling it either, the energy was so off. As the hours rolled by Caleb was the first to leave, he had to pick up his little brother. When he was gone Aliyah seemed bored. \n\n \"Wanna go home together?\" She asked."
    },

        //BUTTON2 VARIANTS "UMM.."
        {
            //IF FOLLOW UP => 'Hi, nice to meet you'
            number: 15,
            name: "Um... (Confident)",
            "button text": ["Walk with Aliyah", "Walk Alone", "Take the long route"],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "You contemplate on it. \"It'll be fun, I promise.\" She grins. After school Aliyah walks you the basketball court where three guys were playing ball in the empty court. \n\n \"My friends.\" She explained to you. She hollered at them as the both of you got closer, when they spotted her they hollered back. \n\n  \"Who's this?\" The one who'd been holding the ball threw it over to the person next to him. He was the tallest of all of them, dark with dreadlocs, an air of confidence and ease around him. You kind of found him attractive. \n\n \"I'm Tamara.\" You introduced yourself before Aliyah could do so. \n\n His smiled at you, looking you up and down. \"Dane.\" He reached out for your hand, you took it, both of you sharing a look till Aliyah cleared her throat. \n\n \"Well,\" She contiuned. \"This is Caleb, my boyfriend\" She pulled the blonde with green eyes to herself, he smiled and waved. \"And that's, Noah.\" She pointed at the third guy. He had a buzzcut and sharp eyes, he looked kind of mean. He turned to you and gave an acknowledging nod. \"Hey.\" He said curtly. \n\n \"Hey.\" You responded. Without saying another word he continued hooping. \n\n Aliyah turned to you. \"He's not very talkative.\" \n\n Dane scoffed. \"Unless you're his type that is. You're my type though.\" He looked at you. \n\n You giggled. This wasn't bad at all. \n\n They seemed like a good crew, you spent the rest of the afternoon with them talking and laughing. As the hours rolled by Caleb was the first to leave, he had to pick up his little brother. When he was gone Aliyah seemed bored. \n\n \"Wanna go home together?\" She asked."
        },
        {
            //IF FOLLOW UP => 'Hello...'
            number: 16,
            name: "Um... (Shy)",
            "button text": ["Walk with Aliyah", "Walk Alone", "Take the long route"],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "You don't exactly think you'll be comfortable meeting new people right now. \n\n \"Come on, It'll be fun, I promise.\" She grins. \n\n You sigh. \"Okay...\" \n\n She hoots and hollers. After school Aliyah walked you the basketball court where three guys were playing ball in the empty court. \n\n \"My friends.\" She assured you. She hollered at them as the both of you got closer, when they spotted her they hollered back. \n\n  \"Who's this?\" The one who'd been holding the ball threw it over to the person next to him. He was the tallest of all of them, dark with dreadlocs, an air of confidence and ease around him. \n\n \"She's Tamara.\" Aliyah introduced you. \n\n \"I'm Dane. Nice to meet you.\" \n\n \"Nice to meet you too.\" You managed a response. \n\n \"Well,\" She contiuned. \"This is Caleb, my boyfriend\" She pulled the blonde with green eyes to herself, he smiled and waved. \"And that's, Noah.\" She pointed at the third guy that was now walking over to them. \n\n \"Hi.\" He smiled at you. He had a buzzcut and sharp eyes, he looked kind of mean but his smile proved otherwise. \n\n \"Hi.\" You say back. This wasn't so bad after all. \n\n They seemed like a good crew, you spent the rest of the afternoon with them talking and laughing, they all helped you ease into the group. As the hours rolled by Caleb was the first to leave, he had to pick up his little brother. When he was gone Aliyah seemed bored. \n\n \"Wanna go home together?\" She asked."
        },
        {
            //IF FOLLOW UP => 'Good...'
            number: 17,
            name: "Um... (Mean)",
            "button text": ["Walk with Aliyah", "Walk Alone", "Take the long route"],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "\"That isn't a good idea.\" You say. \"Come on. It'll be fun, I promise.\" \n\n You shake your head. \n\n She sighs. \"Alright then...\" After school you decide to stay back for a while and work on some art. It was a hobby you were pretty new to and you hadn't even told anyone else about it. It wasn't much but everytime you saw yourself get better it felt like a dopamine boost. \n\n You look up from your book. There was someone else in the classroom you'd chosen. He hadn't looked up at you once not even when you first walked in. He seemed to be drawing too, he seemed odd. He played with a strand of his messy afro and for a second he looked up at you. You ducked away, hoping he didn't see you. It didn't take long before you decided it was time to head home. \n\n You're walking home alone when you hear somebody call out to you. It's Aliyah again. She talks to the guys she's with, A tall one with dreadlocs and a slightly less tall one with a buzzcut. They both look at you at the same time. She must have told them about you. They seem to wave her goodbye as they walk off. \n\n She jogs over to you. \"Hey, wanna go home together?\""
        },

        //BUTTON3 VARIANTS "No."
        {
            //IF FOLLOW UP => 'Hi, nice to meet you'
            number: 18,
            name: "No. (Confident)",
            "button text": ["Walk with Aliyah", "Walk Alone", "Take the long route"],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "You don't exactly think you'll be comfortable meeting new people right now. \n\n \"Come on, It'll be fun, I promise.\" She grins. \n\n You laugh nervously, shaking your hands in front of yourself. \n\n She sighs. \"Alright then.\" \n\n After school you're walking home alone when you hear somebody call out to you. It's Aliyah again. She talks to the guys she's with, A tall one with dreadlocs and a slightly less tall one with a buzzcut. The tall one with dreadlocs especially catches your eyes. They both look at you at the same time. You make eye contact with him. The other turns back to Aliyah but his gaze lingers on you a bit before turning to Aliyah. She must have told them about you. They seem to wave her goodbye as they walk off. \n\n She jogs over to you. \"Hey, wanna go home together?\""
        },
        {
            //IF FOLLOW UP => 'Hello...'
            number: 19,
            name: "No. (Shy)",
            "button text": ["Walk with Aliyah", "Walk Alone", "Take the long route"],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "You contemplate on it. \"It'll be fun, I promise.\" She grins. \n\n You laugh and shake your head. \n\n \"I'm sorry.\" \n\n She sighs. \"Alright then.\" After school you're walking home alone when you hear somebody call out to you. It's Aliyah again. She talks to the guys she's with, A tall one with dreadlocs and a slightly less tall one with a buzzcut. The shorter one with the buzzcut especially catches your eyes. He was so pretty. They both look at you at the same time. You make eye contact with him before averting your gaze. You look up again to see that the other one had turned away but his gaze lingered on you a bit before turning to Aliyah. She must have told them about you. They seem to wave her goodbye as they walk off. \n\n She jogs over to you. \"Hey, wanna go home together?\""
        }, 
        {
            //IF FOLLOW UP => 'Good...'
            number: 20,
            name: "No... (Mean)",
            "button text": ["Walk with Aliyah", "Walk Alone", "Take the long route"],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "\"No, sorry...\" \n\n She sighs. \"Alright then.\" She backs off after that interaction. \n\n After school you decide to stay back for a while and work on some art. It was a hobby you were pretty new to and you hadn't even told anyone else about it. It wasn't much but everytime you saw yourself get better it felt like a dopamine boost. \n\n You look up from your book. There was someone else in the classroom you'd chosen. He hadn't looked up at you once not even when you first walked in. He seemed to be drawing too, he seemed odd. He played with a strand of his messy afro and for a second he looked up at you. You ducked away, hoping he didn't see you. He left soon after and It didn't take long before you decided it was time to head home.\n\n You're walking home, when you see Aliyah and two guys walk off. You duck to a corner hoping she won't see you. When you're sure she's out of sight you come out. \n\n Thinking about the route to take. You're in no hurry to go home, you would have prefered to explore a bit but with all the missing girls cases it would be wiser to just go straight home..."
        },










//CASE 3
//BUTTON1 VARIANTS "WALK WITH ALIYAH"
    {
        number: 21,
        name: "Walk with Aliyah (Confident)",
        "button text": ["Sit with Aliyah", "Sit Alone", "Sit with Leo"],
        "button functions": [confidentKing, devilShy, sweetMean],
        text: "\"So, how was your first day?\" \n\n You shrug. \"It was alright.\" \n\n \"What did you think of him?\" \n\n \"Who?\" You try to aviod it. \n\n She laughs. \"Don't play dumb, I saw you two eyeballing each other. She was talking about the one with Dreadlocs. \n\n \"Dane.\" She said his name. \n\n You smile. \"He's cute or whatever.\" \n\n She shoves you playfully. \"No need to get all shy.\" \n\n \"Whatever.\" You laugh. \"I think he's cute alright.\" \n\n \"Hey, I'll be the last person to judge. Better to think of boys than all the murders going on.\" \n\n \"They said they were missing, not murdered.\" \n\n She gives you a look. \"Do you really believe they're all just missing?\" \n\n No, but you'd never wanted to admit it to yourself. It was too scary to think about what could have happened to them. \n\n At school the next day it's lunch time. You look around the cafeteria contemplating who to sit with. Aliyah waves you over to her table."
    },
    {
        number: 22,
        name: "Walk with Aliyah (Shy)",
        "button text": ["Sit with Aliyah", "Sit Alone", "Sit with Leo"],
        "button functions": [confidentKing, devilShy, sweetMean],
        text: "\"So, how was your first day?\" \n\n You shrug. \"It was great.\" \n\n \"What did you think of him?\" \n\n \"Who?\" You try to aviod it. You try your best to look aloof. \n\n She laughs. \"Don't play dumb, I saw you two eyeballing each other. She was talking about the one with the buzzcut. \n\n \"Noah.\" She said his name. \n\n You try your best to hide your blush. \"He's pretty cute.\" \n\n She shoves you playfully. \"No need to get all shy.\" \n\n \"Yeah, yeah.\" You laugh. \"I think he's cute alright.\" \n\n \"Hey, I'll be the last person to judge. Better to think of boys than all the murders going on.\" \n\n \"They said they were missing, not murdered.\" \n\n She gives you a look. \"Do you really believe they're all just missing?\" \n\n No, but you'd never wanted to admit it to yourself. It was too scary to think about what could have happened to them. \n\n At school the next day it's lunch time. You look around the cafeteria contemplating who to sit with. Aliyah waves you over to her table."
    },
    {
        number: 23,
        name: "Walk with Aliyah (mean)",
        "button text": ["Sit with Aliyah", "Sit Alone", "Sit with Leo"],
        "button functions": [confidentKing, devilShy, sweetMean],
        text: "\"So, how was your first day?\" \n\n You shrug. \"Whatever.\" \n\n \"First days can be like that, don't worry about it... So, see anyone you like.\" \n\n \"No.\" You stare at her pointedly. \n\n She laughs. \"Hey, I'll be the last person to judge. Better to think of boys than all the murders going on.\" \n\n \"They said they were missing, not murdered.\" \n\n She gives you a look. \"Do you really believe they're all just missing?\" \n\n No, but you'd never wanted to admit it to yourself. It was too scary to think about what could have happened to them. \n\n At school the next day it's lunch time. You look around the cafeteria contemplating who to sit with. Aliyah waves you over to her table."
    },
    // BUTTON 2 VARIANTS "WALK ALONE"
        {
            number: 24,
            name: "Walk alone (Confident)",
            "button text": ["Sit with Aliyah", "Sit Alone", "Sit with Leo"],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "\"So, how was your first day?\" \n\n You shrug. \"It was alright.\" \n\n \"What did you think of him?\" \n\n \"Who?\" You try to aviod it. \n\n She laughs. \"Don't play dumb, I saw you two eyeballing each other. She was talking about the one with Dreadlocs. \n\n \"Dane.\" She said his name. \n\n You smile. \"He's cute or whatever.\" \n\n She shoves you playfully. \"No need to get all shy.\" \n\n \"Whatever.\" You laugh. \"I think he's cute alright.\" \n\n \"Hey, I'll be the last person to judge. Better to think of boys than all the murders going on.\" \n\n \"They said they were missing, not murdered.\" \n\n She gives you a look. \"Do you really believe they're all just missing?\" \n\n No, but you'd never wanted to admit it to yourself. It was too scary to think about what could have happened to them. \n\n At school the next day it's lunch time. You look around the cafeteria contemplating who to sit with. Aliyah waves you over to her table."
        },
        {
            number: 25,
            name: "Walk alone (Shy)",
            "button text": ["Sit with Aliyah", "Sit Alone", "Sit with Leo"],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "\"So, how was your first day?\" \n\n You shrug. \"It was great.\" \n\n \"What did you think of him?\" \n\n \"Who?\" You try to aviod it. You try your best to look aloof. \n\n She laughs. \"Don't play dumb, I saw you two eyeballing each other. She was talking about the one with the buzzcut. \n\n \"Noah.\" She said his name. \n\n You try your best to hide your blush. \"He's pretty cute.\" \n\n She shoves you playfully. \"No need to get all shy.\" \n\n \"Yeah, yeah.\" You laugh. \"I think he's cute alright.\" \n\n \"Hey, I'll be the last person to judge. Better to think of boys than all the murders going on.\" \n\n \"They said they were missing, not murdered.\" \n\n She gives you a look. \"Do you really believe they're all just missing?\" \n\n No, but you'd never wanted to admit it to yourself. It was too scary to think about what could have happened to them. \n\n At school the next day it's lunch time. You look around the cafeteria contemplating who to sit with. Aliyah waves you over to her table."
        },
        {
            number: 26,
            name: "Walk alone (mean)",
            "button text": ["Sit with Aliyah", "Sit Alone", "Sit with Leo"],
            "button functions": [confidentKing, devilShy, sweetMean],
            text: "\"So, how was your first day?\" \n\n You shrug. \"Whatever.\" \n\n \"First days can be like that, don't worry about it... So, see anyone you like.\" \n\n \"No.\" You stare at her pointedly. \n\n She laughs. \"Hey, I'll be the last person to judge. Better to think of boys than all the murders going on.\" \n\n \"They said they were missing, not murdered.\" \n\n She gives you a look. \"Do you really believe they're all just missing?\" \n\n No, but you'd never wanted to admit it to yourself. It was too scary to think about what could have happened to them. \n\n At school the next day it's lunch time. You look around the cafeteria contemplating who to sit with. Aliyah waves you over to her table."
        },
]
