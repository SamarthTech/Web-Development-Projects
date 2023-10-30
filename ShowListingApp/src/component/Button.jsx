import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <Link to={props.link} className='button'>{props?.buttonName}</Link>

  )
}

export default Button
