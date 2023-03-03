//https://www.flaticon.com/free-icon/guru_2043847?related_id=2043847&origin=search
let paraText = `We at 1 make useful android apps and websites. We have made useful android apps like 2 and 3 android app using Kotlin and Android Studio IDE. `
let para = document.getElementById("introduction-text")
let code_chakra = "Code Chakra Studio"
let code_chakra_span = document.createElement("span")
code_chakra_span.style = "color:#0d6efd" 
let insta_dn = document.createElement("a")
insta_dn.id = "insta-downloader" 
insta_dn.href = "#"
let insta_txt = "Insta downloader"
let vac_txt = "VAC: Video to Audio Converter"
let vac_ele = document.createElement("a")
vac_ele.id = "vac-converter"
vac_ele.href = "#"
let  i = 0
let step = 1
let j = 0
let atCharCode = false
 function typeFunction(){ 
    
   if( i < paraText.length){
        if(paraText.charAt(i)== 1){
                atCharCode = true
                step = 1
                para.appendChild(code_chakra_span)
        }
        if(paraText.charAt(i) == 2){
            atCharCode = true
            step = 2
            para.appendChild(insta_dn)
        }
        if(paraText.charAt(i) == 3){
            atCharCode = true
            step =3
            para.appendChild(vac_ele)
        }
        if(atCharCode){
            if(step == 1){
                if(j < code_chakra.length){
                    code_chakra_span.innerHTML += code_chakra.charAt(j)
                    j++
                }else{
                    atCharCode = false
                    j = 0
                    i++
                    step = 2
                }
            }else if(step == 2){
                if(j < insta_txt.length){
                    insta_dn.innerHTML += insta_txt.charAt(j)
                    j++
                }else{
                    atCharCode = false
                    j = 0
                    i++
                    step = 3
                }
            }else if(step == 3){
                if(j < vac_txt.length){
                    vac_ele.innerHTML += vac_txt.charAt(j)
                    j++
                }else{
                    atCharCode = false
                    j = 0
                    i++
                    step = 3
                }
            }
        }else{
            para.innerHTML+= paraText.charAt(i)
            i++
        }
        setTimeout(typeFunction,50)
   }
}


typeFunction()
// let j = 0
// function createCodeChakra(){
//     if(j < code_chakra.length){
//         code_chakra_span.innerHTML+=code_chakra.charAt(j)
//         j++
//         // setTimeout(createCodeChakra, 5)
//         createCodeChakra()
//     }

// }