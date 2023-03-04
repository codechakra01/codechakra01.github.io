const quote_list = [
    `"There are 10 types of people in the world: those who understand binary, and those who don't."`,
    `"Debugging is like being a detective in a crime movie where you're also the murderer."`,
    `"The best thing about a boolean is even if you are wrong, you are only off by a bit."`
]
//92
//86
//85
let jitter = 0
let unOrderedElement = document.getElementById("funny-quote-list")
function loopForIritating(){
    for(let i in quote_list){
        let li = document.createElement("li")
        let paragraph = document.createElement("p")
        li.appendChild(paragraph)
        unOrderedElement.appendChild(li)
        setTimeout(()=>{
            writeInPara(paragraph,i)
        },i * 7000)
       

    }
}

function writeInPara(element, i){
 //   console.log(typeof quote_list[i] )
    if(jitter < quote_list[i].length){
        element.innerHTML += quote_list[i].charAt(jitter)
        jitter++
        setTimeout(()=>{
            writeInPara(element,i)
        },50) 
    }else{
        jitter = 0
    }
}
setTimeout(loopForIritating, 4000)
