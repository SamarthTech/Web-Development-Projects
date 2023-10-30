const getRequest = (url)=>{
    fetch(url).then(res=>{
       res.json().then(result =>{
        return result
       })
       .catch(e=>{
        console.log(e)
       })
    })
    .catch(e => {
        console.log(e)
        console.log(e)
    })
}

export default getRequest;