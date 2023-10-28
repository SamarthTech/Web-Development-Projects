let shortcutbar=document.getElementById("shortcutbar")
let iconcontainers=shortcutbar.querySelectorAll(".iconcontainers")

let clock=document.getElementById("clock")

let h=0
let m=0
function timefont(x){
    if(x<10){
        return ("0"+x)
    }else{
        return x
    }
}
function settime(){
    var time=new Date()
    h=time.getHours()
    m=time.getMinutes()
    let h1=h
    if(h1==24){
        h=0
    }
    if(h>12){
        h=h-12
    }
    h=timefont(h)
    m=timefont(m)
    clock.innerHTML=h+":"+m
    // setTimeout(() => {
    //     settime()
    // }, 60000);
    setTimeout(() => {
        settime()
    }, 30000);
}
settime()


for(let i of iconcontainers){
    i.addEventListener("mouseenter",()=>{
        i.setAttribute("style","background-color:rgb(201, 196, 193)")//162, 162, 162
    })
    i.addEventListener("mouseleave",()=>{
        i.setAttribute("style","background-color:rgb(217, 217, 217)")//211, 211, 211
    })
    
}

let nt=document.getElementById("newtab")
nt.addEventListener("click",()=>{
    window.open("index.html", '_blank');
})

let url=""
function redirect(url1){
    window.location.href=url1
}

let iconcontainersarr=Array.from(iconcontainers)
for(let j in iconcontainersarr){
    iconcontainersarr[j].addEventListener("click",()=>{
        if(j==1){
            url="https://weather.com/en-IN/weather/today"
        }
        if(j==3){
            url="https://translate.google.co.in"
        }
        if(j==4){
            url="https://getbootstrap.com"
        }
        if(j==5){
            url="https://stackoverflow.com"
        }
        if(j==6){
            url="https://chat.openai.com/auth/login"
        }
        if(j==7){
            url="https://github.com"
        }
        if(j==8){
            url="https://www.youtube.com"//added all the links...add more if more are included
        }
        if(j==9){
            url="https://web.telegram.org"
        }
        if(j==10){
            url="https://web.whatsapp.com"
        }
        if(j==11){
            url="https://mail.google.com"
        }
        if(j==12){
            url="https://www.facebook.com"
        }
        if(j==13){
            url="https://www.instagram.com"
        }
        if(j==14){
            url="https://open.spotify.com"
        }
        if(j==15){
            url="https://www.linkedin.com"
        }
        if(j==16){
            url="https://www.reddit.com"
        }
        if(j==17){
            url="https://www.amazon.in"
        }

        redirect(url)
    })
}


