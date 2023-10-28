const batterylevel = () =>{
    const lvl = document.getElementById('icon');
    lvl.className = "fa fa-battery-empty fa-4x";
    lvl.style.color = "#fff"
    setTimeout(() => {
        lvl.className = "fa fa-battery-quarter fa-4x"
        lvl.style.color = 'red'
    }, 1000)

    setTimeout(() => {
        lvl.className = "fa fa-battery-half fa-4x"
        lvl.style.color = 'red'
    }, 2000)

    setTimeout(() => {
        lvl.className = "fa fa-battery-three-quarters fa-4x"
        lvl.style.color = '#F4CE14'
    }, 3000)

    setTimeout(() => {
        lvl.className = "fa fa-battery-full fa-4x"
        lvl.style.color = '#A6FF96'
    }, 4000)


}

setInterval(batterylevel , 5000)


