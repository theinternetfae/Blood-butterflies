let shy = 0;
let confident = 0;
let mean = 0;

const buttonBox = document.getElementById("moves");
const shyText = document.getElementById("shyText");
const confidentText = document.getElementById("confidentText");
const meanText = document.getElementById("meanText");

const kingBee = document.getElementById("button1");
const shyDevil = document.getElementById("button2");
const meanSweetHeart = document.getElementById("button3");
const displayText = document.getElementById("text");




const path = [ 
    {
        id: 1,
        text: "Show this instead.",
        Options: [
            {
                text: "Excited",
                setState: () => { confident += 5 },
                nextPath: 2
            },
            {
                text: "Anxious",
                setState: () => { shy += 5 },
                nextPath: 2
            },
            {
                text: "Whatever...",
                setState: () => { mean += 5 },
                nextPath: 2
            }
        ]
    },
    {
        id: 2,
        text: "Testing Path two",
        Options: [
            {
                text: "Button 1",
                setState: () => { confident -= 5 },
                nextPath: -1
            },
            {
                text: "Button 2",
                setState: () => { shy -= 5 },
                nextPath: -1
            },
            {
                text: "Button 3",
                setState: () => { mean -= 5 },
                nextPath: -1
            }
        ]
    },
]