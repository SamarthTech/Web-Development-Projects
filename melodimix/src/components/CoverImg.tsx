import React from 'react'
import coverimg from "../asset/images/Blue White Modern Music concert Banner Landscape.png"

const CoverImg = () => {
  return (
    <div style = {{marginTop : "45px"}}>
       <img className='coverimg' src={coverimg} alt="" />
    </div>
  )
}

export default CoverImg
