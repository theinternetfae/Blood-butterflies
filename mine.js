let shy = 0;
let confident = 0;
let mean = 0;
const buttonBox = document.getElementById("moves");

//personality
let shyText = document.getElementById("shyText");
let confidentText = document.getElementById("confidentText");
let meanText = document.getElementById("meanText");

//moves
let kingBee = document.getElementById("button1");
let shyDevil = document.getElementById("button2");
let meanSweetHeart = document.getElementById("button3");

const displayText = document.getElementById("text")

// //Working with branches.
// let shyDevilClicked = false;
// let kingBeeClicked = false;
// let meanSweetHeartClicked = false;


//Initializing paths with objects
let pathsOne = {
    kingBee: 1
};

let pathsTwo = {
    shyDevil: 1
}

let pathsThree = {
    meanSweetHeart: 1
}


// Event listener for kingBee button path
kingBee.addEventListener('click', () => {
    switch(pathsOne.kingBee) {
        case 1:
            displayText.innerText = "You're going to rule this school! You feel it in your bones. Happily, you saunter into the school. You get to your first class and take a seat. \n\n You can feel eyes on you from the girl in the next seat. You turn. \n\n \"Hi\" She smiles. \"I'm Aliyah\".";
            confident += 5;
            confidentText.innerText = confident;
            kingBee.innerText = "Hi, I'm Tamara. Nice to meet you";
            shyDevil.innerText = "Hello...";
            meanSweetHeart.innerText = "Good to know.";
            pathsOne.kingBee = 2;
            break;
        case 2:
            displayText.innerText = "\"Nice to meet you too!\" she beams. \"I like your pencil case.\" \n\n \"Thanks!\" You say. \n\n Before she says anything else, the teacher walks in. \n\n \"We could hang out after school, what do you think?\" She whispers.";
            confident += 5;
            confidentText.innerText = confident;
            kingBee.innerText = "Yeah, sure";
            shyDevil.innerText = "Um...";
            meanSweetHeart.innerText = "No.";
            pathsOne.kingBee = 3;
            break;
        case 3:
            displayText.innerText = "After your classes for the day Aliyah pulls you over to a group of people. \n\n \"My friends.\" She explains to you. \"You're gonna love them!\" \n\n She hollers as you two walk up to them they all turn and holler back with smiles on their faces. \n\n \"I got my hands on the new girl first.\" She says jokingly. \n\n \"Yeah you've always been the unassigned scout.\" A guy stands out from the rest. His dreadlocs tied back in a manbun, his gaze sharp and dark. He smiles at you. \"I'm Dane.\" He reaches out a hand. \n\n You smile back. \"Tamara.\" You take his hand. \n\n One by one everyone introduces themselves, they seem like a fun, jolly bunch. The group slowly disperses as the hours pass. Soon it's time to go home. \n\n \"We can walk home together.\" Aliyah offers.";
            kingBee.innerText = "Walk with Aliyah";
            shyDevil.innerText = "Walk alone";
            meanSweetHeart.innerText = "Take the long route";
            pathsOne.kingBee = 1;
            break;
    }
});



// Event listener for kingBee button path
shyDevil.addEventListener('click', () => {
    switch(pathsTwo.shyDevil) {
        case 1:
            displayText.innerText = "You hope the feeling will fade eventually, till then you decide you would prefer to lay low for now. You duck your head and hold on tightly to your backpack as you walk into the school. You get to your first class and take a seat. \n\n You can feel eyes on you from the girl in the next seat. You turn. \n\n \"Hi\" She smiles. \"I'm Aliyah\".";
            shy += 5;
            shyText.innerText = shy;
            kingBee.innerText = "Hi, I'm Tamara. Nice to meet you";
            shyDevil.innerText = "Hello...";
            meanSweetHeart.innerText = "Good to know.";
            pathsTwo.shyDevil = 2;
            break;
        case 2:
            displayText.innerText = "\"What's your name?\" She asks. \n\n \"Tamara.\" You tell her. \n\n \"Nice to meet you.\" she smiles. \"I like your pencil case.\" \n\n You fiddle with the pencil case. \"Thank you.\" You say then look at her to find a way to give the compliment back. \"I like your hair\". You say finally. Her hair was brown with a red streak in it, wasn't that against the dress code? \n\n She giggles. \"Thanks!\" \n\n Before she says anything else, the teacher walks in. \n\n \"We could hang out after school, what do you think?\" She whispers.";
            shy += 5;
            shyText.innerText = shy;
            kingBee.innerText = "Yeah, sure";
            shyDevil.innerText = "Um...";
            meanSweetHeart.innerText = "No.";
            pathsTwo.shyDevil = 3;
            break;
        case 3:
            displayText.innerText ="\"Oh, come on. It'll be fun, I promise.\" \n\n \"...Okay.\" \n\n After your classes for the day Aliyah pulls you over to a group of people. \n\n You shrink a bit. \"That's a lot of people.\" You whisper to her. \n\n \"They're just my friends.\" She explains to you re-assuringly. \"You'll love them don't worry.\" \n She hollers as you two walk up to them they all turn and holler back with smiles on their faces. \n \"I got my hands on the new girl first.\" She says jokingly. \"She's a shy one though.\" She gives you a teasing look. The others snicker. \n\n \"Don't take them too seriously.\" A guy stands out from the rest. He seemed gentle and calm. Low cut hair with glasses that sat primly on his nose, his gaze was gentle. He smiled at you. \"I'm Noah. What's your name?\"  \n\n You smile back. \"Tamara.\" \n\n \"Nice to meet you, Tamara\" He says. \n\n One by one everyone introduces themselves, you feel the tension fading, Noah paid close attention to you the whole time, it made you feel warm inside. The group slowly dispersed as the hours pass. Soon it's time to go home. \n\n \"We can walk home together.\" Aliyah offers.";
            kingBee.innerText = "Walk with Aliyah";
            shyDevil.innerText = "Walk alone";
            meanSweetHeart.innerText = "Take the long route";
            pathsTwo.shyDevil = 1;
            break;
    }
});

meanSweetHeart.addEventListener('click', () => {
    switch(pathsThree.meanSweetHeart) {
        case 1:
            displayText.innerText = "School ALWAYS sucks, no matter the reputation, it's hard to give a shit. You let out a deep exhale as you walk into the school. You get to your first class and take a seat. \n\n You can feel eyes on you from the girl in the next seat. You turn. \n\n \"Hi\" She smiles. \"I'm Aliyah\".";
            mean += 5;
            meanText.innerText = mean;
            kingBee.innerText = "Hi, I'm Tamara. Nice to meet you";
            shyDevil.innerText = "Hello...";
            meanSweetHeart.innerText = "Good to know.";
            pathsThree.meanSweetHeart = 2;
            break;
        case 2:
            displayText.innerText = "";
            mean += 5;
            meanText.innerText = mean;
            kingBee.innerText = "Yeah, sure";
            shyDevil.innerText = "Um...";
            meanSweetHeart.innerText = "No.";
            pathsThree.meanSweetHeart = 2;
            break;
            
    }
})

