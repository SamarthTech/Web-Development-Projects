const body=document.body
var search1=document.getElementsByClassName("searchbar")
var search=search1[0]
var inputs=""
// search.innerHTML=""
let link="index.html"
let backgrounddiv1=body.getElementsByClassName("backg")
let backgrounddiv=backgrounddiv1[0]
let bt=""
let arrowbtn1=body.getElementsByClassName("arrowbutton")
let arrowbtn=arrowbtn1[0]
let mainimg1=body.getElementsByTagName("img")
let mainimg=mainimg1[0]
let navdivmargin=document.getElementById("navdivmargin")
let mainimgb=false
let shortbar=document.getElementById("shortcutbar")
let btnimg1=arrowbtn.getElementsByClassName("btnimg")
let btnimg01=btnimg1[0]
let btnimg02=btnimg1[1]
// let clock=document.getElementById("clock")
// let kk0=0
// let navdivmargin1=body.getElementsByClassName("navdivmargin")
// let navdivmargin=navdivmargin1[0]
for(let k1=1;k1<21;k1++){
    var elem1=document.createElement("div")
    elem1.classList.add("backtextrow")
    backgrounddiv.appendChild(elem1)
    if(k1%2==0){
        var no=23
    }else{
        var no=26
    }
    for(let k=1;k<no;k++){
        var elem=document.createElement("div")
        elem.classList.add("backtext")
        elem.innerHTML=bt
        elem1.appendChild(elem)
    }
}
let backtexts=Array.from(backgrounddiv.getElementsByClassName("backtext"))

var id=null
function myMove(initialpos) {
    var elem = arrowbtn;
    var pos = initialpos;
    var finalpos=0
    if(initialpos==-15){finalpos=15}else{finalpos=-15}
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == finalpos) {
        clearInterval(id);
      } else {
        
        if(initialpos==-15){
            elem.style.bottom = pos + 'px';
            pos++;
        }else{
            pos--;
            elem.style.bottom = pos +"px";
        }
      }
    }
  }
arrowbtn.addEventListener("mouseenter",()=>{
    myMove(-15)
    // arrowbtn.classList.add("arrowbtn")
    // arrowbtn.setAttribute("style","animation-fill-mode: forwards;")
})
arrowbtn.addEventListener("mouseleave",()=>{
    myMove(15)
    // arrowbtn.setAttribute("style","animation-fill-mode: backwards;")
})

// var id1=null
function mainimganimate(initialwidth) {
    // kk0=-1
    var id1=null
    var img = mainimg;
    var pos1 = initialwidth;
    var finalwidth=0
    // img.style.height=230;
    if(initialwidth==170){finalwidth=0}else{finalwidth=170}
    clearInterval(id1);
    id1 = setInterval(frame, 0);
    function frame() {
      if (pos1 == finalwidth) {
        // kk0=1
        // if(initialwidth==170){
        //     img.style.height=0;
        // }
        clearInterval(id1);
      } else {
        if(initialwidth==0){
            pos1=pos1+2;
            img.style.width = pos1 + 'px';
        }else{
            pos1=pos1-2;
            img.style.width = pos1+'px';
        }
      }
    }
}

var id2=null
var id3=null
var id4=null
var id5=null
var id6=null
function navdivmarginanimate1(initialwidth1){
    // kk0=-1
    let nvd = navdivmargin;
    var pos2 = initialwidth1;
    var finalwidth1=0
    if(initialwidth1==10){finalwidth1=0;}else{
        // nvd.style.display="inline-block";
        finalwidth1=10;}
    clearInterval(id2);
    id2 = setInterval(frame1, 10);
    function frame1() {
      if (pos2 == finalwidth1) {
        // if(initialwidth1==8){
        //     nvd.style.display="none";
        // }
        // kk0=2
        clearInterval(id2);
      } else {
        if(initialwidth1==0){
            // console.log("wide")
            pos2=pos2+1;
            nvd.style.width=pos2+'px';
            nvd.style.border=(pos2/4)+"px solid black";
        }else{
            pos2=pos2-1;
            nvd.style.width = pos2 +"px";
            nvd.style.border=(pos2/4)+"px solid black";
        }
      }
    }}
function navdivmarginanimate2(initialheight){
    // kk0=-1
    var nvd=navdivmargin;
    var pos3 = initialheight;
    var finalheight=0;
    if(initialheight==200){finalheight=500}else{finalheight=200}
    clearInterval(id3);
    id3 = setInterval(frame2, 0);
    function frame2() {
      if (pos3 == finalheight) {
        // kk0=3
        clearInterval(id3);
      } else {
        if(initialheight==200){
            // console.log("height")
            pos3=pos3+4;
            nvd.style.height = pos3 + 'px';
            
        }else{
            pos3=pos3-4;
            nvd.style.height = pos3 +"px";
        }
      }
    }
}
function navdivmarginanimate3(initialangle){
    // kk0=-1
    var nvd=navdivmargin;
    var pos4 = initialangle;
    var finalangle=0;
    if(initialangle==0){finalangle=90;}
        // nvd.style.width=7;nvd.style.height=599;
    clearInterval(id4);
    id4 = setInterval(frame3 , 7);
    function frame3() {
        // console.log(initialangle)
        // console.log(finalangle)
        // console.log(pos4)
        if (pos4 == finalangle){
            // if(initialangle==0){
            //     nvd.style.height=7;
            //     nvd.style.width=599;  
            // }
            // kk0=4
            clearInterval(id4);
        }else{
            
        if(initialangle==0){
            pos4=pos4+2;
            nvd.style.rotate=pos4+'deg'
        }else{
            // console.log("rotate")
            pos4=pos4-2;
            nvd.style.rotate=pos4+'deg'
        }
      }
    }
}
function navdivmarginanimate4(initialm){
    // kk0=-1
    var nvd=navdivmargin;
    var pos6 = initialm;
    var finalm=0;
    if(initialm==0){finalm=120}else{
        // nvd.style.width=7;nvd.style.height=599;
        finalm=0;}//angle has to be chnaged
    clearInterval(id6);
    id6 = setInterval(frame4, 1);
    function frame4() {
        if (pos6 == finalm) {
            // if(initialangle==0){
            //     nvd.style.height=7;
            //     nvd.style.width=599;  
            // }
            // kk0=4
            clearInterval(id6);
        } else {
        if(initialm==0){
            // console.log("ois")
            pos6=pos6+2;
            nvd.style.marginBottom=pos6+"px"
            clock.style.opacity=(pos6/120)
        }else{
            pos6=pos6-2;
            nvd.style.marginBottom=pos6+"px"
            clock.style.opacity=(pos6/120)
        }
      }
    }
}
function shortcutbaranimate(heighti){
    // kk0=-1
    var nvd=shortbar;
    var pos5 = heighti;
    var heightf=0;
    if(heighti==0){heightf=300;}else{heightf=0}
    clearInterval(id5);
    id5 = setInterval(frame4, 1);
    function frame4() {
        if (pos5 == heightf) {
            // kk0=4
            clearInterval(id5);
        } else {
        if(heighti==0){
            pos5=pos5+2;
            nvd.style.height=pos5+"px"
            // nvd.style.border=(pos5/125)+"px solid white";
            nvd.style.opacity=(pos5/300);
        }else{
            pos5=pos5-2;
            nvd.style.height=pos5+"px"
            // nvd.style.border=(pos5/125)+"px solid white";
            nvd.style.opacity=(pos5/300);
        }
      }
    }
}
async function delay(ms){
    return await new Promise(resolve=>setTimeout(resolve,ms))
}

    


async function anime(parameter1,parameter2,parameter3,parameter4,parameter5,margin){
    mainimganimate(parameter1)
    backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[229, 229, 229])
    await delay(700)
    navdivmarginanimate1(parameter2)
    await delay(600)
    navdivmarginanimate2(parameter3)
    await delay(150)
    navdivmarginanimate3(parameter4)
    await delay(700)
    navdivmarginanimate4(margin)
    await delay(500)
    shortcutbaranimate(parameter5)
    // await delay(2000)
    // console.log("awaited")
    // let p1=new Promise((resolve, reject) => {
    //     mainimganimate(parameter1)
    //     setTimeout(()=>{
    //         resolve()
    //     },5000)
    // })
    // let p2=new Promise((resolve, reject) => {
    //     console.log("p2")
    //     navdivmarginanimate1(parameter2)
    //     setTimeout(()=>{
    //         resolve()
    //     },1600)
    // })
    // let p1r=await p1
    // let p2r=await p2
    // return p1r,p2r
}
async function animeback(parameter11,parameter22,parameter33,parameter44,parameter55,margin1){
    shortcutbaranimate(parameter55)
    await delay(500)
    navdivmarginanimate4(margin1)
    await delay(800)
    navdivmarginanimate3(parameter44)
    await delay(30)
    navdivmarginanimate2(parameter33)
    await delay(900)
    // navdivmarginanimate3(parameter44)
    // await delay(700)
    navdivmarginanimate1(parameter22)
    await delay(400)
    mainimganimate(parameter11)
    backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[157, 100, 255])
    // await delay(1500)
    // console.log("awaited")
}

let counter=2
btnimg01.setAttribute("style","display:none;")//counter,mainimgb and these 2 default attributes changed
btnimg02.setAttribute("style","display:inline-block;width:55%;")
arrowbtn.addEventListener("click",()=>{
    // mainimganimate(170)
    if(counter%2==1){
        btnimg01.setAttribute("style","display:none;")
        btnimg02.setAttribute("style","display:inline-block;width:55%;")
        arrowbtn.setAttribute("title","Search")
        search.innerHTML=""
        bt=""
        background(bt)
        // backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[157, 100, 255])
        mainimgb=false
        anime(170,0,200,0,0,0)
    }else{
        btnimg02.setAttribute("style","display:none;")
        btnimg01.setAttribute("style","display:inline-block;rotate:-90deg;")
        arrowbtn.setAttribute("title","Widgets")
        mainimgb=true
        animeback(0,10,500,90,300,120)
            // navdivmarginanimate(0,8,400,90)
    }
    counter++
})


function background(bt){
    for(let ij of backtexts){
        ij.innerHTML=bt
    }
}
lerp = function (a,b,u) {
    return (1-u)*a+u*b;
};
fade = function(property, start, end, duration) {
    var interval = 10;
    var steps = duration/interval;
    var step_u = 1.0/steps;
    var u = 0.0;
    var theInterval = setInterval(function(){
      if (u >= 1.0){ clearInterval(theInterval) }
      var r = parseInt(lerp(start.r, end.r, u));
      var g = parseInt(lerp(start.g, end.g, u));
      var b = parseInt(lerp(start.b, end.b, u));
      var colorname = 'rgb('+r+','+g+','+b+')';
      body.style.setProperty(property, colorname);
      u += step_u;
    }, interval);
};
function backchange(startarr,endarr){
    var property1="background-color"
    var start1={r:startarr[0],g:startarr[1],b:startarr[2]}
    var end1={r:endarr[0],g:endarr[1],b:endarr[2]}
    var duration1=500
    fade(property1,start1,end1,duration1)
}
function previousrgb(index){
    var rgbst=window.getComputedStyle(body).getPropertyValue("background-color")
    let slicedrgb=rgbst.slice(4,(rgbst.length-1))+","
    prvrgb=[]
    var j=""
    for(let i=0;i<slicedrgb.length;i++){
    if(slicedrgb[i]==","){
        prvrgb.push(j)
        j=""
    }else{
        j=j+slicedrgb[i]
    }
    }
    // console.log(Number.parseInt(prvrgb[1]))
    return Number.parseInt(prvrgb[index])
}  

var cursor=document.getElementById("cursor")
var crsi=1
var crsrk=0
document.addEventListener("keydown",(event)=>{
    
    if(mainimgb==true){
        var name=event.key
        if(name=="ArrowRight"){
            if(crsi!=inputs.length){
                crsi=crsi+1
                crsrk=1
            }else{
                crsi=crsi
            }
            
        }
        if(name=="ArrowLeft"){
            if(crsi!=0){
                crsi=crsi-1
                crsrk=1
            }else{
                crsi=crsi
            }
            
        }

        if(name.length==1){
            inputs=inputs.slice(0,crsi)+name+inputs.slice(crsi,inputs.length)
            if(crsi!=inputs.length){
                crsi=crsi+1
            }
        }else if(name=="Backspace"){
            if(crsi!=0){
                inputs=inputs.slice(0,crsi-1)+inputs.slice(crsi,inputs.length)
                crsi=crsi-1
            }
            
        }
        if(inputs.length>=1){
            cursor.style.display="inline-block"
            if(crsrk==0){
                crsi=inputs.length
            }
            
        }else{
            cursor.style.display="none"//disp none
            crsi=1
        }
        search.innerHTML=inputs.slice(0,crsi)+cursor.outerHTML+inputs.slice(crsi,inputs.length)
        console.log(inputs)

        if(name=="Enter"){
            redirect()
        }

    async function redirect(){
        setTimeout(function(){
            window.location.href=link
        },200)
        body.setAttribute("style","transform: scale(5,5) translateY(10vw);transition-duration:1s;transition-timing-function:ease-in;")
    }

    function websitecheck(){
        var html0=inputs
        var html=html0.toLowerCase()
        // console.log(html)
        if((html=="youtube")||(html.includes("yout"))||(html=="yt")){
            link="https://www.youtube.com"
            bt="YouTube"
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[255,0,0])
        }else if((html=="spotify")||(html.includes("spoti"))){
            link="https://www.spotify.com"
            bt="Spotify" 
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[30,215,96])
        }else if((html=="facebook")||(html.includes("faceb"))||(html=="fb")){
            link="https://www.facebook.com"
            bt="Facebook" 
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[66,103,178])
        }else if((html=="twitter")||(html.includes("twit"))){
            link="https://www.twitter.com"
            bt="Twitter"
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[29,161,242])
        }else if((html=="wikipedia")||(html.includes("wikip"))||(html=="wiki")){
            link="https://www.wikipedia.org"
            bt="Wikipedia"
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[199,200,202])
        }else if((html=="amazon")||(html.includes("amaz"))){
            link="https://www.amazon.in"
            bt="Amazon"
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[55, 71, 90])
        }else if(html=="tiktok"){
            link="https://www.tiktok.com"
            bt="TikTok"
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[238,29,82])
        }else if(html=="linkedin"){
            link="https://www.linkedin.com"
            bt="LinkedIn"
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[0,97,146])
        }else if(html=="netflix"){
            link="https://www.netflix.com"
            bt="Netflix"
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[216, 31, 38])
        }else if(html=="pinterest"){
            link="https://www.pinterest.com"
            bt="Pinterest"
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[190,2,21])
        }else if(html=="gmail"){
            link="https://www.mail.google.com"
            bt="Gmail"
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[234, 67, 53])
        }else if(html=="instagram"){
            link="https://www.instagram.com"
            bt="Instagram"
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[221,42,123])
        }else if(html=="github"){
            link="https://www.github.com"
            bt="GitHub"
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[51, 51, 51])
        }else if(html==""){
            bt=""
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[157, 100, 255])
        }else{
            link="http://google.com/search?q="+html0
            bt="Search"
            backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[141, 141, 141])
        }
    }
    websitecheck()
    background(bt)
    }else{
        search.innerHTML=""
        bt=""
        background(bt)
        backchange([previousrgb(0),previousrgb(1),previousrgb(2)],[157, 100, 255])
        btnimg02.setAttribute("style","display:none;")
        btnimg01.setAttribute("style","display:inline-block;rotate:-90deg;")
        mainimgb=true
        animeback(0,10,500,90,300,120)
        // animeback(0,8,600,90,200,150)
        counter++
    }
})

  //Comments{
    // console.log(name)
        // console.log(crsi)
        
        // if(name.length==1){
        //     var txt=document.createElement("pre")
        //     txt.innerHTML=name
        //     txt.classList.add("txt")
        //     search.appendChild(txt)
        // }else if(name=="RightArrow"){
        //     if(crsi!=searchposarr.length-1){
        //         var tab=searchposarr[crsi+1]
        //         searchposarr[crsi+1]=crs
        //         crs=tab
        //     }
        //     // var crs=document.createElement("p")
        //     // crs.classList.add("cursor")
        //     // search.appendChild(crs)

        // }else if(name=="LeftArrow"){
        //     if(crsi!=0){
        //         var tab1=searchposarr[crsi-1]
        //         searchposarr[crsi-1]=crs
        //         crs=tab1
        //     }
            
        // }
        
        // var searchposarr=Array.from(search.getElementsByTagName("pre"))
        // var crs=document.getElementById("cursor")
        // var crsi=-1
        // for(let searchind in searchposarr){
        //     if(searchposarr[searchind]==crs){
        //         crsi=searchind
        //     }
            
        // }
        
        
        
        // document.setAttribute("contentEditable","true")
        // console.log(search.innerHTML)
    
    // console.log(event.key)
    // if(name=="Backspace"){
    //     inputs=inputs.slice(0,cursor)+inputs.slice(cursor+1,inputs.length)
    // }else 
   
    // if((name=="Enter")&&(name!=' ')){
    //     redirect()
    // }else if(name.length==1){
    //     inputs=inputs.slice(0,cursor)+name+inputs.slice(cursor+1,inputs.length)
    //     console.log(inputs)
    // }
    // search.setAttribute("value",inputs)
    // cursor=search.selectionStart 
    // console.log("cursor:"+cursor)

    // if((name=="RightArrow")||(name=="LeftArrow")){
    //     inputs=inputs+"|"
    //     var cursor=document.createElement("span")
    //     cursor.id="cursor"
    //     search.appendChild(cursor)
    // }
    // if(name=="RightArrow"){
    //     cursor.style.right="-25px"
    // }else(name=="LeftArrow"){
    //     cursor.style.left="-25px"
    // }
    // while(kk0!=4){
        //     if(kk0!=-1){
        //         if(kk0==0){
        //             mainimganimate(170)
        //             kk0=4
        //         }
        //         // if(kk0==1){
        //         //     navdivmarginanimate1(0)
        //         //     kk0=4
        //         // }
        //         // if(kk0==2){
        //         //     navdivmarginanimate2(200)
        //         // }
        //         // if(kk0==3){
        //         //     navdivmarginanimate3(0)
        //         // }
        //     }
        // }
        // kk0=0
        // mainimganimate(170)
        // setTimeout(()=>{
        //     mainimganimate(170)
        // },1600)
        // navdivmarginanimate1(170)
        // ,0,200,0
    // while(kk0!=4){
    //         if(kk0==0){
    //             mainimganimate(0)
    //         }
    //         if(kk0==1){
    //             navdivmarginanimate1(8)
    //         }
    //         if(kk0==2){
    //             navdivmarginanimate2(400)
    //         }
    //         if(kk0==3){
    //             navdivmarginanimate3(90)
    //         }
    //     }
    //     kk0=0
        // mainimganimate(0)
    // document.addEventListener("load",()=>{
//     search.focus()
// })
// let cursor=0
// setInterval(()=>{
//     cursor=search.selectionStart
//     console.log(cursor)
// },1000)
// var txt=document.createElement("pre")
        //     txt.innerHTML="fuck"
        //     txt.classList.add("txt")
        //     txt.setAttribute("style","color:red")
        // search.innerHTML=search.innerHTML+name+txt.outerHTML
        // console.log(search.innerHTML)
        // var test=search.innerHTML

//   }