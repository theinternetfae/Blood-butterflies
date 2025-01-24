//stats
let PhysicalHealth = 100;
let MentalHealth = 100;
let shy = 0;
let confident = 0;
let mean = 0;
const buttonBox = document.getElementById('moves');


//Well-being
const pHText = document.getElementById("physicalHealthText");
const mHText = document.getElementById("mentalHealthText");


//personality
const shyText = document.getElementById("shyText");
const confidentText = document.getElementById("confidentText");
const meanText = document.getElementById("meanText");

//buttons
const moves = document.getElementById("moves");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const next = document.getElementById("decisions");
const goOn = document.getElementById("go-on");
const box = document.getElementById("box");

//text
const displayText = document.getElementById("text");

//paths
const kingBee = [
    {
        number: "0",
        name: "Excited",
        "button text": ["Hi!, I'm Tamara nice to meet you", "Hello..." , "Good to Know"],
        "button functions": [confidentKingBee, shyDevil, meanSweetHeart],
        text: "You're going to rule this school! You feel it in your bones. Happily, you saunter into the school. You get to your first class and sit on the chair. <br> <p>You can feel eyes on you from the girl in the next seat. You turn. \"Hi\" She smiles. \"I'm Aliyah\".</p>"
    },
    {
        number: "1",
        name: "Hi! I'm Tamara, nice to meet you.",
        "button text": ["Yeah, sure", "Um..." , "No"],
        "button functions": [confidentKingBee, shyDevil, meanSweetHeart],
        text: "\"Nice to meet you too!\" she beams. \"It's been a while since I saw a new girl so preppy on their first day.\" <p>\"Why's that?\" You ask.</p>  <p>Her brows furrow. \"Haven't you heard?-\" Before she completes her statement the teacher walks into the class. \"I'll tell you all about it after class.\" She whispers. \"We could hang out after school, what do you think?\". </p>"
    },
    {
        number: "2",
        name: "Yeah, sure",
        "button text": ["Walk home with Aliyah", "Walk home alone", "Take the long way"],
        "button functions": [confidentKingBee, shyDevil, meanSweetHeart],
        text: "After your classes for the day Aliyah pulls you over to a group of people. <p>\"My friends.\" She explains to you re-assuringly. \"You'll love them don't worry.\"</p> <p>She hollers as you two walk up to them they all turn and holler back with smiles on their faces.</p> <p>\"I got my hands on the new girl first.\" She says jokingly.</p> <p>\"Yeah you've always been the unassigned scout.\" A guy stands out from the rest. His dreadlocs tied back in a manbun, his gaze sharp and dark. He smiles at you. \"I'm Dane.\" He reaches out a hand.</p> <p>You smile back. \"Tamara.\" You take his hand.</p> <p>One by one everyone introduces themselves, they seem like a fun, jolly bunch. The group slowly disperses as the hours pass. Soon it's time to go home.</p> <p>\"We can walk home together.\" Aliyah offers.</p>"
    },
    {
        number: "3",
        name: "Walk home with Aliyah",
        "button text": ["Sit with Aliyah", "Sit alone", "Sit with Leo"], //Sit with Leo hidden with a condition.
        "button functions": [confidentKingBee, shyDevil, meanSweetHeart],
        text: "On the way back Aliyah talks and talks, you find it kind of amusing. Maybe it was just the feeling of making your first friend. <p>\"So, what do you think of Dane?\" She asks cheekily</p> <p>You laugh and roll your eyes. \"Whatever, he's cute.\"</p> <p>\"You know, he seems just as interested\"</p> <p>\"Just as interested?\" You say teasingly. \"I just said he was cute, I never said I was interested.\"</p> <p>Aliyah rolls her eyes. \"Girl.\" She gives you a look making you laugh. \"He's a pretty sweet guy too.\"</p> <p>You smile. \"We'll see how it goes... why the fervency.\"</p> <p>She smiles. \"I like you. I already have a boyfriend, if that's what you're thinking. I just think you're new and you need safety. The whole social life thing isn't for the week you know. Dane's sweet, he's good looking and he's popular.\" She looks at you and shrugs.</p> <p>You smirk, amused. \"Love the honesty.\"</p> <p>\"Thanks.\" She giggles.</p>",
    },
    {
        number: "4",
        name: "filler",
        "button text": ["Sit with Aliyah", "Sit alone", "Sit with Leo"], //Sit with Leo hidden with a condition.
        "button functions": [confidentKingBee, shyDevil, meanSweetHeart],
        text: "You two walk quietly for a while. <p>\"You know, its important that you never walk home alone, with all that's going on in town.\"</p> <p>A chilling remembrance that had somehow escaped you the whole day. The gruesome murders that had been going on for half a year now. You never thought you would witness a serial killer so close to home. They targeted mostly school girls with 7 of them having gone missing now and 5 being found dead, all killed the same way. Asphyxsiation, then dismemberment on all limbs except the head. It was like they wanted the victims to be identifiable.</p> <p>\"It's crazy.\" Aliyah let out a deep exhale. \"At least we have each other.\" She put an arm around you \"If we manage to walk home together all the time we can at least fight together if anything comes up.\" She joked nervously.</p> <p>You couldn't help but laugh a bit. \"Yeah.\"</p>" 
    },
]


const devil = [
    {
        name: "Anxious",
        "button text": ["Hi!, I'm Tamara nice to meet you", "Hello..." , "Good to Know."],
        "button functions": [confidentKingBee, shyDevil, meanSweetHeart],
        text: "You hope the feeling will fade eventually, till then you decide you would prefer to lay low for now. You duck your head and hold on tightly to your backpack as you walk into the school. You get to your first class and sit on the chair. You can feel eyes on you from the girl in the next seat. You turn. \"Hi\" She smiles. \"I'm Aliyah\"."
    }
]

const sweetHeart = [
    {
        name: "Whatever...",
        "button text": ["Hi!, I'm Tamara nice to meet you", "Hello...", "Good to Know."],
        "button functions": [confidentKingBee, shyDevil, meanSweetHeart],
        text: "School ALWAYS sucks, no matter the reputation, it's hard to give a shit. You let out a deep exhale as you walk into the school. You get to your first class and sit on the chair. You can feel eyes on you from the girl in the next seat. You turn. \"Hi\" She smiles. \"I'm Aliyah\"."
    }
]

function pathWay(boys) {
    button1.innerText = boys["button text"][0];
    button2.innerText = boys["button text"][1];
    button3.innerText = boys["button text"][2];
    button1.onclick = boys["button functions"][0];
    button2.onclick = boys["button functions"][1];
    button3.onclick = boys["button functions"][2];
    text.innerHTML = boys.text;
}


function confidentKingBee() { 
    confident += 5;
    confidentText.innerText = confident;
    pathWay(kingBee[3]);
    moves.style.display = "none";
    box.style.display = "block";
    next.style.display = "none"
}


next.addEventListener('click', () => {
    moves.style.display = "block";
    box.style.display = "block";
    
});

goOn.addEventListener('click', () => {
    pathWay(kingBee[4]);
    next.style.display = "block";
    goOn.style.display = "none";
});

button1.onclick = confidentKingBee;

const body = document.getElementById("body");


function shyDevil() {
    shy += 5;
    shyText.innerText = shy;
    pathWay(devil[0]);
    moves.style.display = "none";
    box.style.display = "block";
    goOn.style.display = "none"
    body.style.backgroundColor = "#750D1C";
    displayText.style.backgroundColor = "#190608";
}

button2.onclick = shyDevil;

function meanSweetHeart() {
    mean += 5;
    meanText.innerText = mean;
    pathWay(sweetHeart[0]);
    moves.style.display = "none";
}

button3.onclick = meanSweetHeart;
























































// // Stats
// let PhysicalHealth = 100;
// let MentalHealth = 100;
// let shy = 0;
// let confident = 0;
// let mean = 0;

// // Well-being elements
// const pHText = document.getElementById("physicalHealthText");
// const mHText = document.getElementById("mentalHealthText");
// const cText = document.getElementById("cashText");

// // Personality elements
// const shyText = document.getElementById("shyText");
// const confidentText = document.getElementById("confidentText");
// const meanText = document.getElementById("meanText");

// // Buttons
// const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2");
// const button3 = document.getElementById("button3");

// // Text display
// const displayText = document.getElementById("text");


// const paths = {
//     kingBee: [
//         {
//             name: "Excited",
//             "button text": ["Hi!, I'm Y/N nice to meet you", "Hello..." , "Good to Know."],
//             "button functions": ["confidentKingBee", "shyDevil", "meanSweetHeart"],
//             text: "You're going to rule this school! You feel it in your bones. Happily, you saunter into the school. You get to your first class and sit on the chair. <br> <p>You can feel eyes on you from the girl in the next seat. You turn. \"Hi\" She smiles. \"I'm Aliyah\".</p>"
//         },
//         {
//             name: "Continue",
//             "button text": ["Sounds great!", "I don't know...", "No."],
//             "button functions": ["confidentKingBee", "shyDevil", "meanSweetHeart"],
//             text: "\"Nice to meet you too!\" she beams. \"I love your pencil case.\" Your blood butterfly pencil case. <p>You squeal in excitement. \"No way. You love them too?\"</p> <p>She scoffs and pulls out a pemcil case of her own.</p> <p>\"This is crazy, not many people like the band talk less of having a pencil case of them. My mom says it's tacky.\"</p> <p>She laughs. \"Mine too, only special people know greatness when they see it.\"</p> <p>You giggle.</p> You end up chatting a bit more about your interests and about the school. A short while later the teacher walks into the class. <p>\"We could hang out after school, what do you think?\".</p>"
//         }
//     ],
//     shyDevil: [
//         {
//             name: "Excited",
//             "button text": ["Hi!, I'm Y/N nice to meet you", "Hello..." , "Good to Know."],
//             "button functions": ["confidentKingBee", "shyDevil", "meanSweetHeart"],
//             text: "Testing ShyDevil..."
//         },
//         {
//             name: "Continue",
//             "button text": ["Tell me more", "That's nice", "Not interested"],
//             "button functions": ["confidentKingBee", "shyDevil", "meanSweetHeart"],
//             text: "Testing ShyDevil...2"
//         }
//     ],
//     meanSweetHeart: [
//         {
//             name: "Excited",
//             "button text": ["Hi!, I'm Y/N nice to meet you", "Hello..." , "Good to Know."],
//             "button functions": ["confidentKingBee", "shyDevil", "meanSweetHeart"],
//             text:"Testing meanSweetHeart..."
//         },
//         {
//             name: "Continue",
//             "button text": ["Tell me more", "That's nice", "Not interested"],
//             "button functions": ["confidentKingBee", "shyDevil", "meanSweetHeart"],
//             text: "Testing meanSweetHeart...2"
//         }
//     ]
// };

// let currentPath = 'kingBee'; // Track the current path
// let currentStep = 0; // Track the current step in the path

// function updateStats(stat, value) {
//     if (stat === 'confident') {
//         confident += value;
//         confidentText.innerText = confident;
//     } else if (stat === 'shy') {
//         shy += value;
//         shyText.innerText = shy;
//     } else if (stat === 'mean') {
//         mean += value;
//         meanText.innerText = mean;
//     }
//     nextStep();
// }

// function nextStep() {
//     currentStep++;
//     if (currentStep >= paths[currentPath].length) {
//         currentStep = 0; // Reset or handle the end of the path
//     }
//     pathWay(paths[currentPath][currentStep]);
// }

// function pathWay(boys) {
//     button1.innerText = boys["button text"][0];
//     button2.innerText = boys["button text"][1];
//     button3.innerText = boys["button text"][2];
//     button1.onclick = () => updateStats('confident', 5);
//     button2.onclick = () => updateStats('shy', 5);
//     button3.onclick = () => updateStats('mean', 5);
//     text.innerHTML = boys.text;
// }

// function startGame() {
//     currentStep = 0;
//     pathWay(paths[currentPath][currentStep]);
// }

// startGame();
