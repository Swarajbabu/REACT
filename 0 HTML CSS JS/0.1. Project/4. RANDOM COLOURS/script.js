let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    let h3 = document.querySelector("h1")
    let randomColor = getRandonColour()
    h3.innerHTML = randomColor
    
    let div = document.querySelector("div")
    div.style.backgroundColor = randomColor;
});

const getRandonColour = () =>{
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    
    let color = `rgb(${r}, ${g}, ${b})`
    return color
}


