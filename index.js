// let number=parseInt(prompt("Enter the number of rows you want to make in nxn matrix"));
const divContainer=document.querySelector("#container");
const showColor=document.querySelector("#showColor");
const range=document.querySelector("#range");
const container=document.getElementById("container");

let isDrawing=false;
let isSteps=false;
let isRainbowMode=false;
let max=255;
let min=1;
let changeColorBoolean=true;
let id="1";
let number=50;
let stepsColor=100;
let colorValue="#000000";

document.getElementById(id).style.background="rgb(56, 56, 56)";
showColor.style.background=colorValue;
createGrid();
range.addEventListener("click",(event)=>{
    number=event.target.value; 
    document.getElementById("rangeValue").innerHTML=number+"x"+number;
    document.querySelector("#container").innerHTML="";
    createGrid();
})

container.addEventListener("mousedown", ()=>{isDrawing=true;})
container.addEventListener("mouseup",()=>{isDrawing=false});
container.addEventListener("mouseover",(event)=>{
    if(!isDrawing){return;}
    if(isRainbowMode){
        event.target.style.background="rgb("+(Math.random()*(max-min)+min)+", "+(Math.random()*(max-min)+min)+", "+(Math.random()*(max-min)+min)+")";
    }else if(isSteps){
        event.target.style.background="hsl(0, 0%, "+stepsColor+"%)";
        if(stepsColor>0){
            stepsColor-=10;
        }
    }else{
        event.target.style.background=colorValue;
    }
})
showColor.addEventListener("click",()=>{
    document.getElementById("color").click();
})
function createGrid(){
    for(i=0;i<number;i++){
        const divRows=document.createElement("div");
        divRows.setAttribute("id","rows");
        divContainer.appendChild(divRows);
        for(j=0;j<number;j++){
            const divColumns=document.createElement("div");
            divColumns.setAttribute("id","columns");
            divRows.appendChild(divColumns);
        }
    }
}
function changeColor(){
    if(changeColorBoolean){
        colorValue=document.getElementById("color").value;
        showColor.style.background=colorValue;
    }else{
        showColor.style.background=document.getElementById("color").value;
    }
}
function selectMode(event){
    switch (event.innerHTML){
        case "Color mode":
            isSteps=false;
            isRainbowMode=false;    
            changeColorBoolean=true;
            event.style.background="rgb(56, 56, 56)";
            document.getElementById(id).style.background="none";
            colorValue=document.getElementById("color").value;
            stepsColor=100;
            break;
        case "Rainbow mode":
            isSteps=false;
            isRainbowMode=true;
            document.getElementById(id).style.background="none";
            event.style.background="rgb(56, 56, 56)";
            changeColorBoolean=false;
            stepsColor=100;
            break;
        case "10 Steps":
            isRainbowMode=false;
            isSteps=true;
            colorValue="#FFFFFF";
            document.getElementById(id).style.background="none";
            changeColorBoolean=false;
            event.style.background="rgb(56, 56, 56)";
            break;
        case "Eraser":
            isSteps=false;
            isRainbowMode=false;    
            document.getElementById(id).style.background="none";
            changeColorBoolean=false;
            colorValue="#FFFFFF";
            event.style.background="rgb(56, 56, 56)";
            stepsColor=100;
            break;
        case "Clear":
            document.querySelector("#container").innerHTML="";
            stepsColor=100;
            createGrid();
            break;
    }
    if(event.id!="5"){
        id=event.id;
    }
}