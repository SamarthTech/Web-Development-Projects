const convert = () =>{
const temp = document.getElementById('val').value ;
const option = document.getElementById('sct').value ;
let result = document.getElementById('res');
let answer = 0;
if(option == 'celsius'){
   
    answer = Math.round((temp * 9/5)+ 32)
    result.innerHTML = `Your temperature in degree fahrenheit is ${answer}`
}else{
    answer = Math.round((temp - 32)*5/9)
    result.innerHTML = `Your temperature in degree celsius is ${answer}`
}
}