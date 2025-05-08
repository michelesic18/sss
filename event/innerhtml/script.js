//window.addEventListener('DOMContentLoaded', () =>{ //window è la cosa più esterna a qui riferirsi
    const box = document.getElementById('box')
    console.log(box);
    //per impostare regole css utilizzare style
    box.style.backgroundColor= "green"
    let boxWidth = 300
    box.style.width = `${boxWidth}px`
    box.style.height= (boxWidth/2) + 'px'
    st = "nuovo contenuto"
    const x = 10
    const BoxContent = x > 0 ? "box contenuto" : "st"
    box.innerHTML= BoxContent

//eventi
    let i = 0
    box.addEventListener('click', () =>{
        box.style.backgroundColor ="darkblue"
        box.innerHTML=`
        <h2>
        ${st} hai cliccato  ${++i}  ${i < 2 ? " volta" : " volte"}
        </h2>
    `})

    box.addEventListener('mouseenter', () =>{
        console.log("hai passato il mouse sopra il box");
        
    })

    box.addEventListener('mouseleave', () =>{
        console.log("hai tolto il mouse");
        
    })
    
    const box2 = document.getElementById("box2")

    const counter = {
        mouseEnter: 0,
        MouseOver: 0,
    }
    box2.addEventListener("mouseenter", () =>{
        const box2Child = box2.querySelector("div")
        
        box2Child.innerHTML ="hai passato il mouse  con mousenter " + ++counter.mouseEnter + " volte"
        

    })
//})