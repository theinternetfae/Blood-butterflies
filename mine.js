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
            if (shy === 5) {
                update(paths[4]);
            } else if (mean === 5) {
                update(paths[5]);
            }
        } 
    
        
        else if (kingCount === 1) {
            update(paths[3]);
            confident += 5;
            confidentText.innerText = confident;
        }

        kingCount++;
        break;
    }    
}

function devilShy() {
    while (devilCount < 8) {
        if (devilCount === 0) {
            update(paths[1]);
            shy += 5;
            shyText.innerText = shy;
            if (confident === 5) {
                update(paths[6]);
            } else if (mean === 5) {
                update(paths[8])
            }
        }
    
        else if (devilCount === 1) {
            update(paths[7]);
            shy += 5;
            shyText.innerText = shy;
        }
        devilCount++;
        break;
    }   
}

function sweetMean() {
    while (sweetCount < 8) {
        if (sweetCount === 0) {
            update(paths[2]);
            mean += 5;
            meanText.innerText = mean;
            if (confident === 5) {
                update(paths[9]);
            } else if (shy === 5) {
                update(paths[10])
            }
        }
    
        else if (sweetCount === 1) {
            update(paths[11]);
            shy += 5;
            meanText.innerText = mean;
        }
        sweetCount++;
        break;
    }   
}


const paths = [
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
]