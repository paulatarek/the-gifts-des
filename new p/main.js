$(document).ready(function(){
    $(window).scroll(function(){
        let scr=$(this).scrollTop()
    console.log(scr)
    if(scr>2340){
        document.getElementById("tex2").style.transform="translate(-50%)"
        document.getElementById("tex2").style.transition="0.8s"
    }
    else{
        document.getElementById("tex2").style.transform="translate(0%)"
    }
    if(scr>2276){
  

document.getElementById("tex1").style.transform="translate(50%)"
document.getElementById("tex1").style.transition="0.8s"
    }else{
        document.getElementById("tex1").style.transform="translate(0%)"  
    }
    if(scr>3861){
document.getElementById("footer").style.transform="translate(100%,0%);"
// document.getElementById("footer").style.transition="0,5s"
    }

    })

})


document.getElementById("but1").onclick=function(){
    document.getElementById("icoon1").style.backgroundImage="url(pexels-lisa-fotios-1207918.jpg)"
    document.getElementById("icoon2").style.backgroundImage="url(pexels-mnz-1598507.jpg)"
    document.getElementById("icoon3").style.backgroundImage="url(pexels-pixabay-266666.jpg)"
    document.getElementById("icoon4").style.backgroundImage="url(pexels-vlada-karpovich-4452635.jpg)"
  $(Window).scrollTop(4658)
   
}
document.getElementById("but2").onclick=function(){
    document.getElementById("icoon1").style.backgroundImage="url(pexels-taryn-elliott-4099123.jpg)"
    document.getElementById("icoon2").style.backgroundImage="url(pexels-godisable-jacob-1936848.jpg)"
    document.getElementById("icoon3").style.backgroundImage="url(pexels-lukas-292999.jpg)"
    document.getElementById("icoon4").style.backgroundImage="url(pexels-vlada-karpovich-4452635.jpg)"
    $(Window).scrollTop(4700)
}

let arr=["pexels-cottonbro-studio-6831700.jpg","pexels-ivan-samkov-7911316.jpg","pexels-jill-wellington-3264665.jpg","pexels-nicole-michalou-5774923.jpg","pexels-pixabay-207983.jpg","pexels-renata-kelly-untaler-14840267.jpg"]
setInterval(function()  {
    let x =Math.random()*6
x=Math.floor(x)
document.getElementById("can").style.backgroundImage="url("+arr[x]+")"
}, 3000);
document.getElementById("input").onkeyup=function(){
 let value=   document.getElementById("input").value
 console.log(value)
 document.getElementById("button").onclick=function(){
     document.getElementById("value").textContent=value
 }
}
// var text="Wishing you a better and fulfilling tomorrow as the dawn of New Year approaches. Have an enjoyable one As the New Year is about to begin, I want you to look for better things in life. Happy New Year."
// document.getElementById("box").onclick=function(){
//     document.getElementById("split1").style.backgroundImage="none"
//     document.getElementById("lier").style.display="none"
//     document.getElementById("text").textContent=text
// }
let color=["255, 99, 71","87, 28, 14","36, 68, 15","71, 218, 255","13, 25, 129","85, 8, 47","6, 66, 24","76, 83, 8","22, 31, 112"]
let text =["Wishing you a better and fulfilling tomorrow as the dawn of New Year approaches. Have an enjoyable one.As the New Year is about to begin, I want you to look for better things in life. Happy New Year.","As the New Year blossoms, I hope it brightens your days with everything you have wished for.Season’s greetings and best wishes for the New Year. May each day be filled with warmth, peace, and cherished memories.","May we discover the simple pleasures of life together this New Year and learn to be happy with whatever life brings our way.Hope the New Year fills your life with success, good luck & happiness. And may it be more prosperous than the previous one. Happy New Year.","May you have a great year and a wonderful time ahead. Happy New Year.","May you have new hopes, aspirations, and resolutions for the coming year. Have a happy New Year.","May joy, peace, and harmony be yours throughout the year ahead. Have a blissful New Year.","orget all the regrets of the past and anxieties of the future. Promise yourself a bright and dynamic new year. Happy New Year.","May the New Year bring happy and beautiful times for you. Wish you a very Happy New Year.","May the good things in life be yours in the coming year and always. Best wishes for a happy New Year.","May the New Year give you the strength and courage to face the challenges of life and to take every situation in your stride.","New Year is just another time to say that I shall cherish our friendship forever. Happy New Year."]
document.getElementById("nnn").onclick=function(){
    let col=Math.random()*9
    col=Math.floor(col)
    let tex=Math.random()*11
    tex=Math.floor(tex)
    document.getElementById("split1").style.backgroundColor="rgb("+color[col]+")"
    document.getElementById("text").textContent=text[tex]
    document.getElementById("split1").style.backgroundImage="none"
}

