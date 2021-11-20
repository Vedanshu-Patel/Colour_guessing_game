

let n=6;
let colours=GenerateRandomColours(n);
let colourDisplay = document.getElementById("cd");
let cc=pickRandomColour();
let box=document.querySelectorAll(".box");
colourDisplay.textContent=cc;
let messageDisplay = document.getElementById("message");
let h1=document.querySelector("h1");
let resetb=document.getElementById("reset");
let modeb=document.querySelectorAll(".mode");
initi();
function initi(){
    SetUpModeButtons();
    SetUpBoxes();

    reset();
}
function SetUpModeButtons(){
        //mode buttons eventlistener
        for(let i=0;i<modeb.length;i++){
            modeb[i].addEventListener("click",function(){
                modeb[0].classList.remove("selected");
                modeb[1].classList.remove("selected");
                this.classList.add("selected");
                if(this.textContent==="Easy"){
                    n=3;
                }
                else
                {
                    n=6;
                }
                // or if we dont want to use if else this.textContent === "Easy" ? n=3: n=6;
                reset();
        
                //how many squares to show
                //pick new colours
                //pick up a new colour
                //update page to reflect changes
            });
        }
}
function SetUpBoxes(){
    for(let i=0; i < box.length; i++){
        //add initial colours to boxes
        box[i].style.backgroundColor=colours[i];
        //add click listeners to boxes
        box[i].addEventListener("click",function(){
            //grab colour of the clicked square
            let clickedc =this.style.backgroundColor;
            if(clickedc===cc)
            {
                messageDisplay.textContent="Correct!!";
                ChangeAllColoursWhenR(cc);
                h1.style.backgroundColor=cc;
                resetb.textContent="Play Again!";
            }
            else
            {
                this.style.backgroundColor="hsl(0, 5%, 11%)";
                messageDisplay.textContent="Try Again!";
            }
        });
    }
}

function reset(){
    //generate all new colours
    colours=GenerateRandomColours(n);
    //pick  new random colour
    cc=pickRandomColour();
    //change colour of boxes
    colourDisplay.textContent=cc;
    for(var i=0; i<box.length; i++){
        if(colours[i])
        {
            box[i].style.display="block";
            box[i].style.backgroundColor=colours[i];
        }
        else
        {
            box[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
    resetb.textContent="New Colours";
}

// easyb.addEventListener("click",function(){
//     n=3;
//     hardb.classList.remove("selected");
//     easyb.classList.add("selected");
//     colours=GenerateRandomColours(n);
//     cc=pickRandomColour();
//     colourDisplay.textContent=cc;
//     for(let i=0;i<box.length;i++){
//         if(colours[i])
//         {
//             box[i].style.backgroundColor=colours[i];
//         }
//         else
//         {
//             box[i].style.display="none";
//         }
//     } 
// });
// hardb.addEventListener("click",function(){
//     n=6;
//     easyb.classList.remove("selected");
//     hardb.classList.add("selected");
//     colours=GenerateRandomColours(n);
//     cc=pickRandomColour();
//     colourDisplay.textContent=cc;
//     for(let i=0;i<box.length;i++){
    
//             box[i].style.backgroundColor=colours[i];
        
//             box[i].style.display="block";
        
//     } 
// });

resetb.addEventListener("click",function(){
    // //generate all new colours
    // colours=GenerateRandomColours(n);
    // //pick  new random colour
    // cc=pickRandomColour();
    // //change colour of boxes
    // colourDisplay.textContent=cc;
    // for(var i=0; i<box.length; i++){
    //     box[i].style.backgroundColor=colours[i];
    // }
    // h1.style.backgroundColor="steelblue";
    // messageDisplay.textContent="";
    // this.textContent="New Colours";
    reset();
});



function ChangeAllColoursWhenR(c){
    //loop through colours
    for(let i=0; i < box.length; i++)
    {
        //change each colour to right colour
        box[i].style.backgroundColor=c;
    }
}
function pickRandomColour(){
    let x=Math.random() * colours.length;
    let xx=Math.floor(x);
    return colours[xx];
}
function GenerateRandomColours(num){
    //make an array of random colours
    let arr=[]
    //add num random colours to array
    for(let i=0;i<num;i++){
        //get random colour and push into the array
        arr.push(RandomColour())
    }
    //return that array
    return arr;
}
function RandomColour(){
    //pick a red from 0 to 255
    let red=Math.floor(Math.random()*256);
    //pick a green from 0 to 255
    let g=Math.floor(Math.random()*256);
    //pick a blue from 0 to 255
    let b=Math.floor(Math.random()*256);
    return "rgb(" + red + ", " + g + ", " + b + ")";
}