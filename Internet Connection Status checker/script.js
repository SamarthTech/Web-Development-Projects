

window.addEventListener("load",checkInternetConnection());

function checkInternetConnection(){
    const statusText=document.getElementById('statusText');
    const IpAddressText=document.getElementById('IpAddressText');
    const networkstrengthText =document.getElementById('networkstrengthText');

    statusText.textContent='Checking...';


    if(navigator.onLine){
        fetch('https://api.ipify.org/?format=json')
        .then((response)=>response.json())
        .then((data)=>{

            IpAddressText.textContent = data.ip;
            statusText.textContent=' Connected';
            
            const connection=navigator.connection;
            const networkstrength= connection? connection.downlink +'Mbps' : 'Unknown';
            networkstrengthText.textContent= networkstrength;
        })
        .catch(()=>{
            statusText.textContent=' Disconnected';
            IpAddressText.textContent='-'
            networkstrengthText.textContent='-' 
        })

    }
    
    else{
        statusText.textContent=' Disconnected';
        IpAddressText.textContent='-'
        networkstrengthText.textContent='-'
    }
}