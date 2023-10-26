var name1=document.getElementById("Name")
var age=document.getElementById("Age")
var email=document.getElementById("Email")
var submitbtn=document.getElementById("submitbtn")
var submitbtncontainer=document.getElementById("submitbtncontainer")

function emailcheck() {
    let value=email.value
    var emailOK=false
    if (value.indexOf("@")!=-1) {
        let textpart=value.split(0,value.indexOf('@'))
        let domainpart=value.split(value.indexOf('@')+1,value.length)
        for (let i1 = 0; i1 < textpart.length-1; i1++) {
            if((textpart[i1]=='.')&&(textpart[i1+1]=='.')){
                emailOK=false
                break
            }else{
                emailOK=true
            }
        }
        for (let i2 = 0; i2 < domainpart.length; i2++) {
            if(((domainpart[i2].charCodeAt(0)>=65)&&(domainpart[i2].charCodeAt(0)<=90))||((domainpart[i2].charCodeAt(0)>=97)&&(domainpart[i2].charCodeAt(0)<=122))||(domainpart[i2]==".")||(domainpart[i2]=="-")){
                emailOK=true
            }else{
                emailOK=false
                break
            }
        }
        if (textpart.length==0) {
            emailOK=false
        }
        if (domainpart.length==0) {
            emailOK=false
        }
    }else{
        emailOK=false
    }
    return emailOK
}

function agecheck(){
    let value=age.value
    var ageOK=false
    if (isNaN(value)||value<1||value>100) {
        ageOK=false
    } else {
        ageOK=true
    }
    return ageOK
}

submitbtncontainer.addEventListener("mouseenter",()=>{
    if ((agecheck()==true)&&(emailcheck()==true)&&(name1.value.length!=0)) {
        
    } else {
        let random=Math.random()
        if(random<=0.25){
            submitbtn.style.left="-120px"
        }else if (random<=0.5) {
            submitbtn.style.left="120px"
        } else if (random<=0.75) {
            submitbtn.style.top="-85px"
        } else {
            submitbtn.style.top="85px"
        }
        if(name1.value.length==0){
            console.warn(`SUBMIT says "Please enter your Name"`)
        }
        if(agecheck()==false){
            console.warn(`SUBMIT says "Entered Age is not valid"`)
        }
        if(emailcheck()==false){
            console.warn(`SUBMIT says "Entered Email is not valid"`)
        }
    }
})
submitbtncontainer.addEventListener("mouseleave",()=>{
    submitbtn.style.left="0px"
    submitbtn.style.right="0px"
    submitbtn.style.top="0px"
    submitbtn.style.bottom="0px"
})

submitbtn.addEventListener("mouseenter",()=>{
    if ((agecheck()==true)&&(emailcheck()==true)&&(name1.value.length!=0)) {
        
    } else {
        let random=Math.floor(Math.random()*4)
        function randomcheck(){
            let rndmcheck=-1
            if(window.getComputedStyle(submitbtn).getPropertyValue("left")=="-120px"){rndmcheck=0}
            else if(window.getComputedStyle(submitbtn).getPropertyValue("left")=="120px"){rndmcheck=1}
            else if(window.getComputedStyle(submitbtn).getPropertyValue("top")=="-85px"){rndmcheck=2}
            else if(window.getComputedStyle(submitbtn).getPropertyValue("top")=="85px"){rndmcheck=3}
            if(random==rndmcheck){
                random=Math.floor(Math.random()*4)
                randomcheck()
            }else{
                if(random==0){
                    submitbtn.style.left="-120px"
                }else if (random==1) {
                    submitbtn.style.left="120px"
                } else if (random==2) {
                    submitbtn.style.top="-85px"
                } else {
                    submitbtn.style.top="85px"
                }
            }
        }
        randomcheck()
        if(name1.value.length==0){
            console.warn(`SUBMIT says "Please enter your Name"`)
        }
        if(agecheck()==false){
            console.warn(`SUBMIT says "Entered Age is not valid"`)
        }
        if(emailcheck()==false){
            console.warn(`SUBMIT says "Entered Email is not valid"`)
        }
    }
})

submitbtn.addEventListener("click",()=>{
    if ((agecheck()==true)&&(emailcheck()==true)&&(name1.value.length!=0)){
        alert(`SUBMIT says "Congratulations! You have caught me."`)
    }
})
