import backgroundImage from '../asset/images/MelodiMix-bg.png'


type BackgroundProps = {
    children : React.ReactNode
}


const  Background = (props : BackgroundProps)=> {
  return (
    <div style={{backgroundImage : `url('${backgroundImage}')` , backgroundColor : "red"}}>
{props.children}
    </div>
  )
}

export default Background ;